import styles from "@/components/BoardBar/boardBar.module.scss"
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded"
import { IBoard } from "@/models/interfaces"
import { useDispatch, useSelector } from "react-redux"
import { userSetFavoriteStart } from "@/state/actions/user.actions"
import { RootState } from "@/state/reducers"

interface IProps {
  favoriteBoards: string[]
  board: IBoard
}

const FavoriteButton = ({ favoriteBoards, board }: IProps) => {
  const { favoriteBoards: favoriteBoardsId, userId } = useSelector(
    (state: RootState) => state.auth.user
  )
  const dispatch = useDispatch()

  const changeFavorite = () => {
    dispatch(
      userSetFavoriteStart({
        userId,
        favorite: favoriteBoardsId.includes(board._id)
          ? favoriteBoardsId.filter((i) => i !== board._id)
          : [...favoriteBoardsId, board._id],
      })
    )
  }

  return (
    <div
      className={styles.favoriteButton}
      tabIndex={0}
      onClick={changeFavorite}
    >
      <StarBorderRoundedIcon
        style={{
          color: favoriteBoards.includes(board._id) ? "#f2d600" : "white",
        }}
      />
    </div>
  )
}

export default FavoriteButton
