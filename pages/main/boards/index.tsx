import { useSelector } from "react-redux"
import { RootState } from "@/state/reducers"
import { useEffect, useState } from "react"
import { IBoard } from "../../../models/interfaces"
import styles from "./boards.module.scss"
import MainSidebar from "@/components/MainSidebar"
import MainLayout from "@/components/layouts/MainLayout"
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded"
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined"
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined"
import BoardSection from "@/components/BoardSection"
import AddBoardForm from "@/components/AddBoardForm"
import { BoardStatus } from "../../../models/types"

const MainBoards = () => {
  const [isFormOpen, setIfFormOpen] = useState(false)
  const [boardStatus, setBoardStatus] = useState<BoardStatus>("Private")
  const boards = useSelector((state: RootState) => state.board.boards)
  const { favoriteBoards: favoriteBoardsId } = useSelector(
    (state: RootState) => state.auth.user
  )
  const [favoriteBoards, setFavoriteBoards] = useState<IBoard[] | []>([])
  const [personalBoards, setPersonalBoards] = useState<IBoard[]>([])
  const [teamsBoards, setTeamsBoards] = useState<IBoard[]>([])
  useEffect(() => {
    setFavoriteBoards(
      boards.filter((board) => favoriteBoardsId.includes(board._id))
    )
    setPersonalBoards(boards.filter((board) => board.personal))
    setTeamsBoards(boards.filter((board) => !board.personal))
  }, [boards])

  const openForm = (e: React.MouseEvent, status: BoardStatus) => {
    e.stopPropagation()
    setIfFormOpen(true)
    setBoardStatus(status)
  }

  return (
    <MainLayout>
      <div className="main-section">
        <MainSidebar />
        <div className={styles.main}>
          {!!favoriteBoards.length && (
            <div className={styles.boardsList}>
              <h4 className={styles.boardsListTitle}>
                <StarBorderRoundedIcon />
                Favorite Boards
              </h4>
              {(favoriteBoards as IBoard[]).map((board) => (
                <BoardSection board={board} />
              ))}
            </div>
          )}
          <div className={styles.boardsList}>
            <h4 className={styles.boardsListTitle}>
              <PersonOutlineOutlinedIcon />
              Personal Boards
            </h4>
            {(personalBoards as IBoard[]).map((board) => (
              <BoardSection board={board} />
            ))}
            <BoardSection
              empty={true}
              openForm={(e) => openForm(e, "Private")}
            />
          </div>
          <div className={styles.boardsList}>
            <h4 className={styles.boardsListTitle}>
              <PeopleOutlinedIcon />
              Teams Boards
            </h4>
            {(teamsBoards as IBoard[]).map((board) => (
              <BoardSection board={board} />
            ))}
            <BoardSection empty={true} openForm={(e) => openForm(e, "Team")} />
          </div>
        </div>
      </div>
      <AddBoardForm
        open={isFormOpen}
        status={boardStatus}
        closeForm={() => setIfFormOpen(false)}
      />
    </MainLayout>
  )
}

export default MainBoards
