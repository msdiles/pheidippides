import styles from "./navbar.module.scss"
import { Button } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Fade from "@material-ui/core/Fade"
import { useRouter } from "next/router"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { authLogoutStart } from "@/state/actions/auth.actions"

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const router = useRouter()
  const dispatch = useDispatch()
  const closeMenu = () => setAnchorEl(null)

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
        <IconButton size="small" onClick={(e) => setAnchorEl(e.currentTarget)}>
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
}

export default Navbar
