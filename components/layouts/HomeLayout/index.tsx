import styles from "./homeLayout.module.scss"
import {ReactNode} from "react"

interface IProps {
  children: ReactNode
}

const HomeLayout = ({children}: IProps) => {
  return (<div className={styles.homeLayout}>{children}</div>)
}

export default HomeLayout
