import {useForm} from "react-hook-form"
import API from "@/utils/API"
import {appSetError} from "@/state/actions/app.actions"
import {useState} from "react"
import {useDispatch} from "react-redux"
import {useRouter} from "next/router"

const useResetPasswordPage=()=>{
  const router =useRouter()
  const [loading, setLoading] = useState(false)
  const [isChanged,setIsChanged] = useState(false)
  const {handleSubmit,register,errors,watch}=useForm()
  const dispatch= useDispatch()



  const onSubmit =async (form:{password:string})=>{
    try {
      setLoading(true)
      const {result, status} = await API.resetPassword(form.email)
      if (status > 202) {
        throw new Error(result.message)
      }
      setIsChanged(true)
    } catch (e) {
      dispatch(appSetError(e.message))
    } finally {
      setLoading(false)

    }
  }

  return {onSubmit:handleSubmit(onSubmit),register,errors,watch}
}

export default useResetPasswordPage
