import { IBoard } from "../../models/interfaces"
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded"
import styles from "./boardSection.module.scss"

interface IProps {
  board?: IBoard
  empty?: boolean
  openForm?: (e: React.MouseEvent) => void
  teamTitle?: string
}

const BoardSection = ({ board, empty, openForm, teamTitle }: IProps) => {
  if (empty) {
    return (
      <div
        onClick={openForm}
        className={styles.boardSection + " " + styles.boardSectionEmpty}
      >
        Create new board
      </div>
    )
  } else if (board) {
    return (
      <div
        className={styles.boardSection}
        style={{ backgroundColor: board.color }}
      >
        <div className={styles.boardSectionInner}>
          <p className={styles.title}>{board.title}</p>
          {teamTitle && <p className={styles.teamName}>{teamTitle}</p>}
          <StarBorderRoundedIcon
            className={styles.favoriteButton}
            fontSize="small"
          />
        </div>
      </div>
    )
  }
  return null
}

export default BoardSection
