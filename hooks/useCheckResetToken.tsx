import API from "@/utils/API"
import {appSetError} from "@/state/actions/app.actions"
import {useRouter} from "next/router"
import {useState} from "react"
import {useForm} from "react-hook-form"
import {useDispatch} from "react-redux"

const useCheckResetToken=()=>{
  const router =useRouter()
  const [loading, setLoading] = useState(false)
  const [isChecked,setIsChecked] = useState(false)
  const dispatch= useDispatch()


const checkURL=async ()=>{
  try {
    setLoading(true)
    const {id,date}=router.query
    if(id && date){
      const {result, status} = await API.resetCheckQuery(id as string,date as string)
      if (status > 200) {
        throw new Error(result.message)
      }
      setIsChecked(true)
    }else{
      throw new Error("Something went wrong")
    }

  } catch (e) {
    dispatch(appSetError(e.message))
  } finally {
    setLoading(false)

  }
}
  // return {onSubmit:handleSubmit(onSubmit),register,errors,watch}
}

export default useCheckResetToken
