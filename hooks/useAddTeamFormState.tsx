import { useState } from "react"

const useAddTeamFormState = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const closeForm = () => setIsFormOpen(false)

  return {
    isTeamFormOpen: isFormOpen,
    setIsTeamFromOpen: setIsFormOpen,
    closeForm,
  }
}

export default useAddTeamFormState
