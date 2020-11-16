import styles from "./boardBody.module.scss"
import AddList from "@/components/AddList"
import { IBoard } from "@/models/interfaces"
import ListOfList from "@/components/ListOfList"

interface IProps {
  board: IBoard
}

const BoardBody = ({ board }: IProps) => {
  return (
    <div className={styles.boardBody}>
      <ListOfList board={board} />
    </div>
  )
}

export default BoardBody
