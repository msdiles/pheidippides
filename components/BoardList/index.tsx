import { IBoard, ITeam } from "@/models/interfaces"
import BoardSection from "@/components/BoardSection"
import { ReactNode } from "react"
import styles from "./boardList.module.scss"
import { useSelector } from "react-redux"
import { RootState } from "@/state/reducers"

interface IProps {
  renderCondition?: boolean
  boards: IBoard[]
  boardListTitle: string | ReactNode
  changeFavorite: (id: string) => void
  createNewField?: boolean
  openForm?: (e: React.MouseEvent<Element, MouseEvent>) => void
  team?: ITeam
}

const BoardList = ({
  renderCondition,
  boards,
  boardListTitle,
  changeFavorite,
  createNewField,
  openForm,
  team,
}: IProps) => {
  const teams = useSelector((state: RootState) => state.team.teams)
  const { favoriteBoards: favoriteBoardsId } = useSelector(
    (state: RootState) => state.auth.user
  )

  if (typeof renderCondition === "undefined" || renderCondition) {
    return (
      <div className={styles.boardsList}>
        <h4 className={styles.boardsListTitle}>{boardListTitle}</h4>
        {(boards as IBoard[]).map((board) =>
          board.team === team?._id || typeof team === "undefined" ? (
            <BoardSection
              key={board._id}
              board={board}
              teamTitle={teams.find((team) => team._id === board.team)?.title}
              setFavorite={changeFavorite}
              isFavorite={favoriteBoardsId.includes(board._id)}
            />
          ) : null
        )}
        {createNewField && (
          <BoardSection empty={true} openForm={openForm || ((e) => {})} />
        )}
      </div>
    )
  }

  return null
}

export default BoardList
