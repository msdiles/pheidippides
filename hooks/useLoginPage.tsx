import {useForm} from "react-hook-form"
import {useDispatch, useSelector} from "react-redux"
import {authLoginStart} from "@/state/actions/auth.actions"
import {RootState} from "@/state/reducers"

interface IForm {
  email: string
  password: string
}

const useLoginPage = () => {
  const {handleSubmit, register, errors} = useForm()
  const loading=useSelector((state:RootState)=>state.auth.loading)
  const dispatch = useDispatch()

  const onSubmit = (form: IForm) => {
    dispatch(authLoginStart({password: form.password, email: form.email, fingerprint: "fingerprint"}))
  }

  return {onSubmit: handleSubmit(onSubmit), register, errors,loading}
}

export default useLoginPage
