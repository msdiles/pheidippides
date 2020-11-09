import styles from "./mainLayout.module.scss"
import { ReactNode } from "react"
import Navbar from "@/components/Navbar"
import { color } from "@/utils/colors"

interface IProps extends React.PropsWithChildren<any> {
  children: ReactNode
  color?: string
}

const MainLayout = ({ children, color, ...props }: IProps) => {
  return (
    <div className={styles.mainLayout} {...props}>
      <Navbar color={color} />
      {children}
    </div>
  )
}

export default MainLayout
