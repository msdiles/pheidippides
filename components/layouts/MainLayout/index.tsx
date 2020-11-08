import styles from "./mainLayout.module.scss"
import { ReactNode } from "react"
import Navbar from "@/components/Navbar"

interface IProps extends React.PropsWithChildren<any> {
  children: ReactNode
}

const MainLayout = ({ children, ...props }: IProps) => {
  return (
    <div className={styles.mainLayout} {...props}>
      <Navbar />
      {children}
    </div>
  )
}

export default MainLayout
