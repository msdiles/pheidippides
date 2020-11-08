import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/state/reducers"
import { useEffect, useState } from "react"
import { appRemoveMessage } from "@/state/actions/app.actions"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert"
import { MessageContent } from "@/models/types"
import styles from "./SnackbarsHandler.module.scss"

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const SnackbarsHandler = () => {
  const { content, type } = useSelector((state: RootState) => state.app.message)
  const [alert, setAlert] = useState<{ content: string; type: MessageContent }>(
    { content: "", type: undefined }
  )
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (content !== "") {
      setAlert({ content, type })
      setOpen(true)
      dispatch(appRemoveMessage())
    }
  }, [content])

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  return (
    <div className={styles.snackbarsHandler}>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert severity={alert.type} onClose={handleClose}>
          {alert.content}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default SnackbarsHandler
