import HomeLayout from "@/components/layouts/HomeLayout"
import styles from "./home.module.scss"
import {Button} from "@material-ui/core"
import Link from "next/link"
import Head from "next/head"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "@/state/reducers"
import {authLogoutStart} from "@/state/actions/auth.actions"

export default function Home() {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const dispatch = useDispatch()
  return <HomeLayout>
    <Head>
      <title>Home | Pheidippides</title>
    </Head>
    <div className={styles.home}>
      {
        isLoggedIn ?
          (
            <>
              <Button className={styles.button}><Link href="main"><a className={styles.link}>Start</a></Link></Button>
              <Button
                className={styles.button}
                onClick={() => dispatch(authLogoutStart())}
              ><Link href="/"><a className={styles.link}>LogOut</a></Link></Button>
            </>
          ) :
          (
            <>
              <Button className={styles.button}><Link href="login"><a className={styles.link}>Log in</a></Link></Button>
              <Button className={styles.button}><Link href="signup"><a className={styles.link}>Sign
                Up</a></Link></Button>
            </>
          )
      }


    </div>
  </HomeLayout>
}
