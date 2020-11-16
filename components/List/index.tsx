import styles from "./list.module.scss"
import { IList } from "@/models/interfaces"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"

interface IProps {
  list: IList
}

const List = ({ list }: IProps) => {
  return (
    <div className={styles.listWrapper}>
      <div className={styles.list}>
        <div className={styles.title}>
          <span>{list.title}</span>
        </div>
        <div className={styles.cards}></div>
        <div className={styles.addForm}></div>
        <MoreHorizIcon className={styles.actionsButton} />
        <div className={styles.actionsList}></div>
      </div>
    </div>
  )
}
export default List
