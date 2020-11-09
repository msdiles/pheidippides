import styles from "@/components/BoardBar/boardBar.module.scss"
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded"
import { IBoard } from "@/models/interfaces"

interface IProps {
  favoriteBoards: string[]
  board: IBoard
}

const FavoriteButton = ({ favoriteBoards, board }: IProps) => {
  return (
    <div className={styles.favoriteButton}>
      <StarBorderRoundedIcon
        style={{
          color: favoriteBoards.includes(board._id) ? "#f2d600" : "white",
        }}
      />
    </div>
  )
}

export default FavoriteButton
