import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/state/reducers"
import { useEffect } from "react"
import { boardGetAllStart } from "@/state/actions/board.actions"
import { teamGetAllStart } from "@/state/actions/team.actions"

const useTeamsPage = () => {
  const teams = useSelector((state: RootState) => state.team.teams)
  const userId = useSelector((state: RootState) => state.auth.user.userId)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(boardGetAllStart({ userId }))
    dispatch(teamGetAllStart({ userId }))
  }, [])

  return { teams }
}

export default useTeamsPage
