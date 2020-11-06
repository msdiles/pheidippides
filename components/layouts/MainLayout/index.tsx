import styles from "./mainLayout.module.scss"
import {ReactNode} from "react"
import Navbar from "@/components/Navbar"

interface IProps{
  children:ReactNode
}

const MainLayout =({children}:IProps)=>{
  return <div className={styles.mainLayout}>
    <Navbar/>
    {children}</div>
}

export default MainLayout
