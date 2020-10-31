import {useState} from "react"

const useShowPasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false)
  const toggleShow = () => setShowPassword(!showPassword)

  return {showPassword,toggleShow}
}

export default useShowPasswordInput
