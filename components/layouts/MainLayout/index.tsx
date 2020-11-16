import styles from "./mainLayout.module.scss"
import { ReactNode, useContext, useEffect } from "react"
import Navbar from "@/components/Navbar"
import { color } from "@/utils/colors"
import { ColorContext } from "@/components/ColorContext"

interface IProps extends React.PropsWithChildren<any> {
  children: ReactNode
  color?: string
}

const MainLayout = ({ children, color, ...props }: IProps) => {
  const { setColor } = useContext(ColorContext)

  useEffect(() => {
    if (color) {
      setColor(color)
    }
  }, [color])

  return (
    <div className={styles.mainLayout} {...props}>
      <Navbar color={color} />
      {children}
    </div>
  )
}

export default MainLayout
