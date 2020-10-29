import {useForm} from "react-hook-form"

const useLoginPage=()=>{
  const {handleSubmit,register,errors}=useForm()

  const onSubmit =()=>{
    console.log("Submit")
  }

  return {onSubmit:handleSubmit(onSubmit),register,errors}
}

export default useLoginPage
