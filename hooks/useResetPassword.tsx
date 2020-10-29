import {useForm} from "react-hook-form"

const useResetPasswordPage=()=>{
  const {handleSubmit,register,errors,watch}=useForm()

  const onSubmit =()=>{
    console.log("Submit")
  }

  return {onSubmit:handleSubmit(onSubmit),register,errors,watch}
}

export default useResetPasswordPage
