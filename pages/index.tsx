import HomeLayout from "@/components/layouts/HomeLayout"
import styles from "./home.module.scss"
import {Button} from "@material-ui/core"
import Link from "next/link"

export default function Home() {
  return <HomeLayout>
    <div className={styles.home}>
      <Button className={styles.button}><Link href="login"><a className={styles.link}>Log in</a></Link></Button>
      <Button className={styles.button}><Link href="signup"><a className={styles.link}>Sign Up</a></Link></Button>
      <Button className={styles.button}><Link href="main"><a className={styles.link}>Start</a></Link></Button>
    </div>
  </HomeLayout>
}
