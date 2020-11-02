import API from "@/utils/API"
import {useRouter} from "next/router"
import {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {FetchResult} from "../models/enums"
import {appSetMessage} from "@/state/actions/app.actions"

const useCheckResetToken = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [isValid, setIsValid] = useState(FetchResult.UNDEFINED)
  const dispatch = useDispatch()


  useEffect(() => {
  }, [])

  useEffect(() => {
    const {id, date} = router.query
    if (id && date) {
      checkURL(id as string, date as string)
    }

  }, [router])

  const checkURL = async (id: string, date: string) => {
    try {
      setLoading(true)
      const {result, status} = await API.resetCheckQuery(id, date)
      if (status > 200 && status !== 403) {
        throw new Error(result.message)
      }
      if (status === 403) {
        setIsValid(FetchResult.FALSE)
      } else {
        setIsValid(FetchResult.TRUE)
      }
    } catch (e) {
      dispatch(appSetMessage({message:e.message,type:"error"}))
    } finally {
      setLoading(false)
    }
  }
  return {isValid, loading}
}

export default useCheckResetToken
