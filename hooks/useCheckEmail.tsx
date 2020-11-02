import {useCallback, useState} from "react"
import API from "@/utils/API"
import {useDispatch} from "react-redux"
import AwesomeDebouncePromise from "awesome-debounce-promise"
import {appSetMessage} from "@/state/actions/app.actions"


const useCheckEmail = () => {
  const [emailLoading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const checkEmail = useCallback(async (email: string) => {
    try {
      setLoading(true)
      const {result, status} = await API.checkEmail(email)
      if (status > 200) {
        throw new Error(result.message)
      }
      return !result.isUserExist
    } catch (e) {
      dispatch(appSetMessage({message:e.message,type:"error"}))
    } finally {
      setLoading(false)

    }
  },[])

  return {emailLoading, checkEmail:AwesomeDebouncePromise(checkEmail,1000)}
}

export default useCheckEmail
