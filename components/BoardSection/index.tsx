import { IBoard } from "../../models/interfaces"
import styles from "./boardSection.module.scss"

interface IProps {
  board?: IBoard
  empty?: boolean
  openForm?: (e: React.MouseEvent) => void
}

const BoardSection = ({ board, empty, openForm }: IProps) => {
  if (empty) {
    return (
      <div onClick={openForm} className={styles.boardSection}>
        Create new board
      </div>
    )
  } else if (board) {
    return (
      <div className={styles.boardSection}>
        <p>{board.title}</p>
        {!!board.team && <p>{board.team}</p>}
      </div>
    )
  }
  return null
}

export default BoardSection
