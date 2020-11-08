import IconButton from "@material-ui/core/IconButton"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Fade from "@material-ui/core/Fade"
import { useRouter } from "next/router"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { authLogoutStart } from "@/state/actions/auth.actions"
import { RootState } from "@/state/reducers"
import { Button } from "@material-ui/core"
import Link from "next/link"
import styles from "./navbar.module.scss"

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  const open = Boolean(anchorEl)
  const router = useRouter()
  const dispatch = useDispatch()
  const closeMenu = () => setAnchorEl(null)

  if (isLoggedIn) {
    return (
      <div className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <IconButton
            size="small"
            className={styles.navbarButton}
            onClick={() => router.push("/main/home")}
          >
            <HomeOutlinedIcon
              fontSize="small"
              className={styles.navbarButtonIcon}
            />
          </IconButton>
        </div>
        <div className={styles.navbarRight}>
          <IconButton
            size="small"
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <AccountCircleIcon
              fontSize="large"
              className={styles.navbarButtonIcon}
            />
          </IconButton>
        </div>

        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={closeMenu}
          TransitionComponent={Fade}
        >
          <MenuItem
            onClick={() => {
              closeMenu()
              router.push("/router")
            }}
          >
            Profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              closeMenu()
              dispatch(authLogoutStart())
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </div>
    )
  } else {
    return (
      <div className={styles.navbar}>
        <div className={styles.navbarLeft}></div>
        <div className={styles.navbarRight}>
          <Button className={styles.button}>
            <Link href="login">
              <a className={styles.link}>Log in</a>
            </Link>
          </Button>
          <Button className={styles.button}>
            <Link href="signup">
              <a className={styles.link}>Sign Up</a>
            </Link>
          </Button>
        </div>
      </div>
    )
  }
}

export default Navbar
