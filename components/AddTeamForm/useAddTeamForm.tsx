import { FormEvent, useState } from "react"
import { TeamStatus } from "@/models/types"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/state/reducers"
import { teamCreateStart } from "@/state/actions/team.actions"

interface IProps {
  closeForm: () => void
}

const useAddTeamForm = ({ closeForm }: IProps) => {
  const [formState, setFormState] = useState<{
    title: string
    status: TeamStatus
    description: string
  }>({
    title: "",
    status: "Private",
    description: "",
  })
  const userId = useSelector((state: RootState) => state.auth.user.userId)

  const dispatch = useDispatch()

  const handleChange = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setFormState({ ...formState, [e.target.name as string]: e.target.value })
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      teamCreateStart({
        team: {
          ...formState,
          creator: userId,
          date: Date.now().toString(),
          members: [userId],
          boards: [],
        },
      })
    )
    closeForm()
    setFormState({
      title: "",
      status: "Private",
      description: "",
    })
  }

  return { formState, onSubmit, handleChange }
}

export default useAddTeamForm
