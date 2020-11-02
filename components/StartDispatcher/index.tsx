import {useDispatch} from "react-redux"
import {useEffect} from "react"
import {authRefresh, authRefreshStart} from "@/state/actions/auth.actions"
import {NextPageContext} from "next"

const StartDispatcher = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authRefresh({}))
  }, [])
  return null
}


export default StartDispatcher
