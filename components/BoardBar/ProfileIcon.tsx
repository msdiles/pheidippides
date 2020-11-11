import styles from "@/components/BoardBar/boardBar.module.scss"
import IconButton from "@material-ui/core/IconButton"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import { useRef, useState } from "react"
import ClickAwayListener from "@/components/ClickAwayListener/intex"
import CloseIcon from "@material-ui/icons/Close"
import { useSelector } from "react-redux"
import { RootState } from "@/state/reducers"
import Link from "next/link"

const ProfileIcon = () => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const user = useSelector((state: RootState) => state.auth.user)

  const toggleOpen = () => {
    setTimeout(() => setOpen(!open), 0)
  }

  const onClickAway = () => {
    setOpen(false)
  }
  return (
    <div>
      <div
        className={styles.profileIcon}
        tabIndex={0}
        ref={ref}
        onClick={toggleOpen}
      >
        <IconButton size="small">
          <AccountCircleIcon fontSize="large" />
        </IconButton>
      </div>
      {open && (
        <ClickAwayListener onClickAway={onClickAway}>
          <div
            className={styles.list}
            style={{
              left: ref.current
                ? ref.current.getBoundingClientRect().left + "px"
                : "1rem",
            }}
          >
            <div className={styles.miniProfile}>
              <AccountCircleIcon fontSize="large" />
              <div className={styles.miniProfileInfo}>
                <p>{user.userName[0].toUpperCase() + user.userName.slice(1)}</p>
                <p>{user.userEmail}</p>

                <Link href={"/profile"}>
                  <a>Edit profile info</a>
                </Link>
              </div>
            </div>
            <CloseIcon className={styles.closeButton} onClick={onClickAway} />
          </div>
        </ClickAwayListener>
      )}
    </div>
  )
}

export default ProfileIcon
