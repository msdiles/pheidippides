import { useForm } from "react-hook-form"
import API from "@/utils/API"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { appSetMessage } from "@/state/actions/app.actions"

const useResetLinkPage = () => {
  const [loading, setLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const { handleSubmit, register, errors, watch } = useForm()
  const dispatch = useDispatch()

  const onSubmit = async (form: { email: string }) => {
    try {
      setLoading(true)
      const { result, status } = await API.resetLink(form.email)
      if (status > 202) {
        throw new Error(result.message)
      }
      setIsSent(true)
    } catch (e) {
      dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      setLoading(false)
    }
  }

  return {
    onSubmit: handleSubmit(onSubmit),
    register,
    errors,
    watch,
    isSent,
    loading,
  }
}

export default useResetLinkPage
