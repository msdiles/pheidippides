import {ReactNode} from "react"

import styles from "./emptyLayout.module.scss"

interface EmptyLayout {
  children: ReactNode
}

const EmptyLayout = ({children}: EmptyLayout) => {
  return <div className={styles["empty-layout"]}>{children}</div>
}
export default EmptyLayout
