import styles from "@/components/BoardBar/boardBar.module.scss"
import { IBoard } from "@/models/interfaces"

interface IProps {
  board: IBoard
}

const BoardTitle = ({ board }: IProps) => {
  return <div className={styles.boardTitle}>{board.title}</div>
}

export default BoardTitle
