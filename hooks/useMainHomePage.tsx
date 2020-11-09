import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { RootState } from "@/state/reducers"
import { boardGetAllStart } from "@/state/actions/board.actions"
import { teamGetAllStart } from "@/state/actions/team.actions"
import { IBoard } from "@/models/interfaces"
import { userSetFavoriteStart } from "@/state/actions/user.actions"

const useMainHomePage = () => {
  const [favoriteBoards, setFavoriteBoards] = useState<IBoard[] | []>([])
  const dispatch = useDispatch()
  const userId = useSelector((state: RootState) => state.auth.user.userId)

  const { boards } = useSelector((state: RootState) => state.board)
  const { favoriteBoards: favoriteBoardsId } = useSelector(
    (state: RootState) => state.auth.user
  )

  useEffect(() => {
    setFavoriteBoards(
      boards.filter((board) => favoriteBoardsId.includes(board._id))
    )
  }, [boards, favoriteBoardsId])

  useEffect(() => {
    dispatch(boardGetAllStart({ userId }))
    dispatch(teamGetAllStart({ userId }))
  }, [])

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

  return { favoriteBoards, changeFavorite }
}

export default useMainHomePage
