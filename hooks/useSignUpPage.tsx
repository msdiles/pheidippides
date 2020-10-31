import {useForm} from "react-hook-form"
import {useState} from "react"
import API from "@/utils/API"
import {useDispatch} from "react-redux"
import {appSetError} from "@/state/actions/app.actions"

interface IForm {
  username: string
  email: string
  password: string
}

const useSignUpPage = () => {
  const [loading, setLoading] = useState(false)
  const [isSignup,setIsSignup]=useState(false)
  const {handleSubmit, register, errors, watch} = useForm()
  const dispatch = useDispatch()

  const onSubmit = async (form: IForm) => {
    try {
      setLoading(true)
      const {result, status} = await API.signup(form.email, form.username, form.password)
      if (status > 200) {
        throw new Error(result.message)
      }
      setIsSignup(true)
    } catch (e) {
      dispatch(appSetError(e.message))
    } finally {
      setLoading(false)

    }
  }

  return {onSubmit: handleSubmit(onSubmit), register, errors, watch, loading,isSignup}
}

export default useSignUpPage
