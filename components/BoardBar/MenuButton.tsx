import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded"
import styles from "@/components/BoardBar/boardBar.module.scss"

const MenuButton = () => {
  return (
    <div className={styles.menuButton}>
      <MoreHorizRoundedIcon />
      Show menu
    </div>
  )
}

export default MenuButton
