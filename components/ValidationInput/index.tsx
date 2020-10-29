import TextField, {TextFieldProps} from "@material-ui/core/TextField"
import {CustomElement, FieldErrors, FieldValues, ValidationRules} from "react-hook-form"
import {useEffect, useState} from "react"

type IProps = TextFieldProps & {
  errors: FieldErrors<FieldValues>
  register: (
    ref:
      ((ValidationRules & HTMLInputElement)
        | (ValidationRules & HTMLSelectElement)
        | (ValidationRules & HTMLTextAreaElement)
        | (ValidationRules & CustomElement<FieldValues>)
        | null)
  ) => void
  errorMessage: { [key: string]: string }
}

const ValidationInput = ({register, errorMessage, errors, ...props}: IProps) => {
  const [message, setMessage] = useState("")
  useEffect(() => {
    Object.keys(errorMessage).map(key => {
      if (errors[(props.name as string)]?.type === key) {
        setMessage(errorMessage[key])
      }
    })
    if(!errors[props.name as string]){
      setMessage("")
    }
  }, [errorMessage, errors])

  return <>
    <TextField inputRef={register} {...props} helperText={message}/></>
}

export default ValidationInput
