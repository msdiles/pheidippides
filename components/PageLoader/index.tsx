import CircularProgress from '@material-ui/core/CircularProgress'
import styles from "./pageLoader.module.scss"

interface IProps {
  open: boolean
}

const PageLoader = ({open}: IProps) => {
  if (open) {
    return (
      <div className={styles.backdrop}>
        <CircularProgress size="3rem" color="secondary"/>
      </div>
    )
  }
  return null
}

export default PageLoader
