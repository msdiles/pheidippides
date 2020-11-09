import styles from "@/components/BoardBar/boardBar.module.scss"
import IconButton from "@material-ui/core/IconButton"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"

const ProfileIcon = () => {
  return (
    <div className={styles.profileIcon}>
      <IconButton size="small">
        <AccountCircleIcon fontSize="large" />
      </IconButton>
    </div>
  )
}

export default ProfileIcon
