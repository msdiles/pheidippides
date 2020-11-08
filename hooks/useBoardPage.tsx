import useAddTeamFormState from "@/hooks/useAddTeamFormState"
import { useEffect, useState } from "react"
import { BoardStatus } from "@/models/types"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/state/reducers"
import { IBoard } from "@/models/interfaces"
import { boardGetAllStart } from "@/state/actions/board.actions"
import { teamGetAllStart } from "@/state/actions/team.actions"
import { userSetFavoriteStart } from "@/state/actions/user.actions"

const useBoardPage = () => {
  const [isBoardFormOpen, setIsBoardFormOpen] = useState(false)
  const [pickedTeam, setPickedTeam] = useState<string | null>(null)
  const [boardStatus, setBoardStatus] = useState<BoardStatus>("Private")
  const { boards, loading: boardLoading } = useSelector(
    (state: RootState) => state.board
  )
  const { teams, loading: teamLoading } = useSelector(
    (state: RootState) => state.team
  )
  const userId = useSelector((state: RootState) => state.auth.user.userId)
  const { favoriteBoards: favoriteBoardsId } = useSelector(
    (state: RootState) => state.auth.user
  )
  const dispatch = useDispatch()
  const [favoriteBoards, setFavoriteBoards] = useState<IBoard[] | []>([])
  const [personalBoards, setPersonalBoards] = useState<IBoard[]>([])
  const [teamsBoards, setTeamsBoards] = useState<IBoard[]>([])

  useEffect(() => {
    dispatch(boardGetAllStart({ userId }))
    dispatch(teamGetAllStart({ userId }))
  }, [])

  useEffect(() => {
    setFavoriteBoards(
      boards.filter((board) => favoriteBoardsId.includes(board._id))
    )
    setPersonalBoards(boards.filter((board) => board.status === "Private"))
    setTeamsBoards(boards.filter((board) => board.status === "Team"))
  }, [boards, favoriteBoardsId])

  const openForm = (
    e: React.MouseEvent,
    status: BoardStatus,
    team: string | null
  ) => {
    e.stopPropagation()
    setPickedTeam(team)
    setBoardStatus(status)
    setIsBoardFormOpen(true)
  }

  const changeFavorite = (id: string) => {
    dispatch(
      userSetFavoriteStart({
        userId,
        favorite: favoriteBoardsId.includes(id)
          ? favoriteBoardsId.filter((i) => i !== id)
          : [...favoriteBoardsId, id],
      })
    )
  }
  return {
    isBoardFormOpen,
    favoriteBoards,
    teams,
    favoriteBoardsId,
    personalBoards,
    changeFavorite,
    openForm,
    teamsBoards,
    boardStatus,
    pickedTeam,
    setIsBoardFormOpen,
  }
}

export default useBoardPage
