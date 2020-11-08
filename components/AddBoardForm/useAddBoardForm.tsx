import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/state/reducers"
import { color, randomColor } from "@/utils/colors"
import { FormEvent, useEffect, useState } from "react"
import { boardCreateStart } from "@/state/actions/board.actions"
import { BoardStatus } from "@/models/types"

interface IProps {
  closeForm: () => void
  status: BoardStatus
  pickedTeam: string | null
}

const useAddBoardForm = ({ pickedTeam, closeForm, status }: IProps) => {
  const { teams } = useSelector((state: RootState) => state.team)
  const userId = useSelector((state: RootState) => state.auth.user.userId)
  const color = randomColor()
  const dispatch = useDispatch()
  const [formState, setFormState] = useState({
    title: "",
    team: pickedTeam,
    status,
    color: color,
  })

  useEffect(() => {
    setFormState({ ...formState, team: pickedTeam, status })
  }, [pickedTeam, status])

  const handleChange = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setFormState({ ...formState, [e.target.name as string]: e.target.value })
  }

  const changeColor = (color: { color: string; title: color }) => {
    setFormState({ ...formState, color })
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      boardCreateStart({
        board: {
          ...formState,
          team: formState.team ? formState.team : null,
          color: formState.color.title,
          lists: [],
          date: Date.now().toString(),
          creator: userId,
        },
      })
    )
    closeForm()
    setFormState({
      ...formState,
      title: "",
    })
  }
  return { formState, onSubmit, teams, handleChange, changeColor }
}

export default useAddBoardForm
