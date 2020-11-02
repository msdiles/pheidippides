import {useForm} from "react-hook-form"
import API from "@/utils/API"
import {useState} from "react"
import {useDispatch} from "react-redux"
import {useRouter} from "next/router"
import {appSetMessage} from "@/state/actions/app.actions"

const useResetPasswordPage = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [isChanged, setIsChanged] = useState(false)
  const {handleSubmit, register, errors, watch} = useForm()
  const dispatch = useDispatch()


  const onSubmit = async (form: { password: string }) => {
    try {
      setLoading(true)
      const {id, date} = router.query
      const {result, status} = await API.resetPassword(id as string, date as string, form.password)
      if (status > 202) {
        throw new Error(result.message)
      }
      setIsChanged(true)
    } catch (e) {
      dispatch(appSetMessage({message:e.message,type:"error"}))
    } finally {
      setLoading(false)

    }
  }

  return {onSubmit: handleSubmit(onSubmit), register, errors, watch, loading, isChanged}
}

export default useResetPasswordPage
