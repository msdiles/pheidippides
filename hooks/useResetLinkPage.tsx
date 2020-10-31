import {useForm} from "react-hook-form"
import API from "@/utils/API"
import {appSetError} from "@/state/actions/app.actions"
import {useState} from "react"
import {useDispatch} from "react-redux"

const useResetLinkPage=()=>{
  const [loading, setLoading] = useState(false)
  const [isSent,setIsSent] = useState(false)
  const {handleSubmit,register,errors,watch}=useForm()
  const dispatch= useDispatch()

  const onSubmit =async (form:{email:string})=>{
    try {
      setLoading(true)
      const {result, status} = await API.resetLink(form.email)
      if (status > 202) {
        throw new Error(result.message)
      }
      setIsSent(true)
    } catch (e) {
      dispatch(appSetError(e.message))
    } finally {
      setLoading(false)

    }
  }

  return {onSubmit:handleSubmit(onSubmit),register,errors,watch,isSent,loading}
}

export default useResetLinkPage
