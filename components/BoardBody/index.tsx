import styles from "./boardBody.module.scss"
import AddList from "@/components/AddList"

const BoardBody = () => {
  return (
    <div className={styles.boardBody}>
      <AddList />
    </div>
  )
}

export default BoardBody
