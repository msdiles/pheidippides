import MainSidebar from "@/components/MainSidebar"
import MainLayout from "@/components/layouts/MainLayout"
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded"
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined"
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined"
import BoardSection from "@/components/BoardSection"
import AddBoardForm from "@/components/AddBoardForm"
import useAddTeamFormState from "@/hooks/useAddTeamFormState"
import AddTeamFrom from "@/components/AddTeamForm"
import useBoardPage from "@/hooks/useBoardPage"
import { IBoard } from "@/models/interfaces"
import styles from "./boards.module.scss"
import Head from "next/head"

const MainBoards = () => {
  const { closeForm, isTeamFormOpen, setIsTeamFromOpen } = useAddTeamFormState()
  const {
    openForm,
    changeFavorite,
    personalBoards,
    favoriteBoardsId,
    favoriteBoards,
    teams,
    isBoardFormOpen,
    setIsBoardFormOpen,
    pickedTeam,
    boardStatus,
    teamsBoards,
  } = useBoardPage()

  return (
    <MainLayout
      style={{
        overflow: isTeamFormOpen || isBoardFormOpen ? "hidden" : "auto",
      }}
    >
      <Head>
        <title>Boards | Pheidippides</title>
      </Head>
      <div className="main-section">
        <MainSidebar setIsFormOpen={setIsTeamFromOpen} />
        <div className={styles.main}>
          {!!favoriteBoards.length && (
            <div className={styles.boardsList}>
              <h4 className={styles.boardsListTitle}>
                <StarBorderRoundedIcon />
                &nbsp; Favorite Boards
              </h4>
              {(favoriteBoards as IBoard[]).map((board) => (
                <BoardSection
                  key={board._id}
                  board={board}
                  teamTitle={
                    teams.find((team) => team._id === board.team)?.title
                  }
                  setFavorite={changeFavorite}
                  isFavorite={favoriteBoardsId.includes(board._id)}
                />
              ))}
            </div>
          )}
          <div className={styles.boardsList}>
            <h4 className={styles.boardsListTitle}>
              <PersonOutlineOutlinedIcon />
              &nbsp; Personal Boards
            </h4>
            {(personalBoards as IBoard[]).map((board) => (
              <BoardSection
                board={board}
                key={board._id}
                setFavorite={changeFavorite}
                isFavorite={favoriteBoardsId.includes(board._id)}
              />
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
                &nbsp;
                {team.title}'s Boards
              </h4>
              {(teamsBoards as IBoard[]).map((board) =>
                board.team === team._id ? (
                  <BoardSection
                    board={board}
                    key={board._id}
                    setFavorite={changeFavorite}
                    isFavorite={favoriteBoardsId.includes(board._id)}
                  />
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
        open={isBoardFormOpen}
        status={boardStatus}
        pickedTeam={pickedTeam}
        closeForm={() => setIsBoardFormOpen(false)}
      />
      <AddTeamFrom open={isTeamFormOpen} closeForm={closeForm} />
    </MainLayout>
  )
}

export default MainBoards
