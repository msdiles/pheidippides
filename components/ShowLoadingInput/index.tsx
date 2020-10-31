import CircularProgress from "@material-ui/core/CircularProgress"
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment"
import NoSsr from "@material-ui/core/NoSsr"
import styles from "./showLoadingInput.module.scss"

const ShowLoadingInput = ({loading}: { loading: boolean }) => {
  if (loading) {
    return (
      <NoSsr>
        <InputAdornment position="end">
          <CircularProgress size={24} className={styles.inputLoader}/>
        </InputAdornment>
      </NoSsr>
    )
  }
  return null
}

export default ShowLoadingInput
