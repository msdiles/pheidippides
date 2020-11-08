import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded"
import { IBoard } from "@/models/interfaces"
import { getColor } from "@/utils/colors"
import styles from "./boardSection.module.scss"

interface IProps {
  board?: IBoard
  empty?: boolean
  openForm?: (e: React.MouseEvent) => void
  teamTitle?: string
  setFavorite?: (id: string) => void
  isFavorite?: boolean
}

const BoardSection = ({
  board,
  empty,
  openForm,
  teamTitle,
  setFavorite = (id: string) => {},
  isFavorite,
}: IProps) => {
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
        style={{ backgroundColor: getColor(board.color) }}
      >
        <div className={styles.boardSectionInner}>
          <p className={styles.title}>{board.title}</p>
          {teamTitle && <p className={styles.teamName}>{teamTitle}</p>}
          <StarBorderRoundedIcon
            className={
              styles.favoriteButton +
              (isFavorite ? " " + styles.favoriteButtonActive : "")
            }
            fontSize="small"
            onClick={() => setFavorite(board._id)}
          />
        </div>
      </div>
    )
  }
  return null
}

export default BoardSection
