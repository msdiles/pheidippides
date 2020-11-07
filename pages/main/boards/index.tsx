import { useDispatch, useSelector } from "react-redux"
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
import { boardGetAllStart } from "@/state/actions/board.actions"
import { teamGetAllStart } from "@/state/actions/team.actions"

const MainBoards = () => {
  const [isFormOpen, setIfFormOpen] = useState(false)
  const [pickedTeam, setPickedTeam] = useState<string | null>(null)
  const [boardStatus, setBoardStatus] = useState<BoardStatus>("Private")
  const { boards, loading: boardLoading } = useSelector(
    (state: RootState) => state.board
  )
  const { teams, loading: teamLoading } = useSelector(
    (state: RootState) => state.team
  )
  const userId = useSelector((state: RootState) => state.auth.user.userId)
  const { favoriteBoards: favoriteBoardsId } = useSelector(
    (state: RootState) => state.auth.user
  )
  const dispatch = useDispatch()
  const [favoriteBoards, setFavoriteBoards] = useState<IBoard[] | []>([])
  const [personalBoards, setPersonalBoards] = useState<IBoard[]>([])
  const [teamsBoards, setTeamsBoards] = useState<IBoard[]>([])

  useEffect(() => {
    dispatch(boardGetAllStart({ userId }))
    dispatch(teamGetAllStart({ userId }))
  }, [])

  useEffect(() => {
    setFavoriteBoards(
      boards.filter((board) => favoriteBoardsId.includes(board._id))
    )
    setPersonalBoards(boards.filter((board) => board.status === "Private"))
    setTeamsBoards(boards.filter((board) => board.status === "Team"))
  }, [boards])

  const openForm = (
    e: React.MouseEvent,
    status: BoardStatus,
    team: string | null
  ) => {
    e.stopPropagation()
    setPickedTeam(team)
    setBoardStatus(status)
    setIfFormOpen(true)
  }

  return (
    <MainLayout style={{ overflow: isFormOpen ? "hidden" : "auto" }}>
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
                <BoardSection
                  board={board}
                  teamTitle={
                    teams.find((team) => team._id === board.team)?.title
                  }
                />
              ))}
            </div>
          )}
          <div className={styles.boardsList}>
            <h4 className={styles.boardsListTitle}>
              <PersonOutlineOutlinedIcon />
              Personal Boards
            </h4>
            {(personalBoards as IBoard[]).map((board) => (
              <BoardSection board={board} key={board._id} />
            ))}
            <BoardSection
              empty={true}
              openForm={(e) => openForm(e, "Private", null)}
            />
          </div>
          {teams.map((team) => (
            <div className={styles.boardsList} key={team._id}>
              <h4 className={styles.boardsListTitle}>
                <PeopleOutlinedIcon />
                {team.title}'s Boards
              </h4>
              {(teamsBoards as IBoard[]).map((board) =>
                board.team === team._id ? (
                  <BoardSection board={board} key={board._id} />
                ) : null
              )}
              <BoardSection
                empty={true}
                openForm={(e) => openForm(e, "Team", team._id)}
              />
            </div>
          ))}
        </div>
      </div>
      <AddBoardForm
        open={isFormOpen}
        status={boardStatus}
        pickedTeam={pickedTeam}
        closeForm={() => setIfFormOpen(false)}
      />
    </MainLayout>
  )
}

export default MainBoards
