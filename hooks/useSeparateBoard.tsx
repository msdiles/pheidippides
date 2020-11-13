import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { IBoard } from "@/models/interfaces"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/state/reducers"
import { boardGetAllStart } from "@/state/actions/board.actions"
import { teamGetAllStart } from "@/state/actions/team.actions"
import { appSetColor } from "@/state/actions/app.actions"
import { getColor } from "@/utils/colors"

const getIdFromUrl = (url: string) => {
  return url.slice(url.lastIndexOf("_") + 1)
}

const useSeparateBoard = () => {
  const [board, setBoard] = useState<IBoard | null>(null)
  const [isCalendarOpen, setCalendarOpen] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const teams = useSelector((state: RootState) => state.team.teams)
  const boards = useSelector((state: RootState) => state.board.boards)
  const userId = useSelector((state: RootState) => state.auth.user.userId)

  useEffect(() => {
    teams.length === 0 && dispatch(boardGetAllStart({ userId }))
    boards.length === 0 && dispatch(teamGetAllStart({ userId }))
  }, [])

  useEffect(() => {
    setBoard(
      boards.find(
        (b) => b._id === getIdFromUrl(router.query.title as string)
      ) || null
    )
  }, [teams.length])

  useEffect(() => {
    const brd = boards.find((b) => b._id === board?._id)
    if (brd) {
      setBoard(brd)
    }
  }, [boards])

  return {
    board,
    color: getColor(board?.color || ""),
    isCalendarOpen,
    setCalendarOpen,
  }
}

export default useSeparateBoard
