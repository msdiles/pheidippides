import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/state/reducers"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { boardGetAllStart } from "@/state/actions/board.actions"
import { teamGetAllStart } from "@/state/actions/team.actions"

const getIdFromURL = (url: string) => {
  return url.slice(url.lastIndexOf("_") + 1)
}

const useTeamPage = () => {
  const userId = useSelector((state: RootState) => state.auth.user.userId)
  const router = useRouter()
  const team = useSelector(
    (state: RootState) =>
      state.team.teams.filter(
        (team) => team._id === getIdFromURL(router.query.title as string)
      )[0]
  )

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(boardGetAllStart({ userId }))
    dispatch(teamGetAllStart({ userId }))
  }, [])

  return { team }
}

export default useTeamPage
