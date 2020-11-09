import MainSidebar from "@/components/MainSidebar"
import MainLayout from "@/components/layouts/MainLayout"
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded"
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined"
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined"
import AddBoardForm from "@/components/AddBoardForm"
import useAddTeamFormState from "@/hooks/useAddTeamFormState"
import AddTeamFrom from "@/components/AddTeamForm"
import useBoardPage from "@/hooks/useBoardPage"
import Head from "next/head"
import BoardList from "@/components/BoardList"
import styles from "./boards.module.scss"

const MainBoards = () => {
  const { closeForm, isTeamFormOpen, setIsTeamFromOpen } = useAddTeamFormState()
  const {
    openForm,
    changeFavorite,
    personalBoards,
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
          <BoardList
            renderCondition={!!favoriteBoards.length}
            boards={favoriteBoards}
            boardListTitle={
              <>
                <StarBorderRoundedIcon />
                &nbsp; Favorite Boards
              </>
            }
            changeFavorite={changeFavorite}
          />
          <BoardList
            boards={personalBoards}
            boardListTitle={
              <>
                <PersonOutlineOutlinedIcon />
                &nbsp; Personal Boards
              </>
            }
            changeFavorite={changeFavorite}
            createNewField={true}
            openForm={(e) => openForm(e, "Private", null)}
          />
          {teams.map((team) => (
            <BoardList
              key={team._id}
              boards={teamsBoards}
              team={team}
              boardListTitle={
                <>
                  <PeopleOutlinedIcon />
                  &nbsp;
                  {team.title}'s Boards
                </>
              }
              changeFavorite={changeFavorite}
              createNewField={true}
              openForm={(e) => openForm(e, "Team", team._id)}
            />
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
