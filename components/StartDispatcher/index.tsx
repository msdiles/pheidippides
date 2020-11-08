import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { authRefresh } from "@/state/actions/auth.actions"

const StartDispatcher = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authRefresh({}))
  }, [])
  return null
}

export default StartDispatcher
