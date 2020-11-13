import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded"
import styles from "@/components/BoardBar/boardBar.module.scss"

const MenuButton = () => {
  return (
    <div className={styles.menuButton} tabIndex={0}>
      <MoreHorizRoundedIcon />
      Show menu
    </div>
  )
}

export default MenuButton
