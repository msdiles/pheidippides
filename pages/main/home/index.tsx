import MainSidebar from "@/components/MainSidebar"
import MainLayout from "@/components/layouts/MainLayout"
import styles from "./home.module.scss"
import AddTeamFrom from "@/components/AddTeamForm"
import useAddTeamFormState from "@/hooks/useAddTeamFormState"
import Head from "next/head"
import StarBorderRoundedIcon from "@material-ui/icons/StarBorderRounded"
import BoardList from "@/components/BoardList"
import useMainHomePage from "@/hooks/useMainHomePage"

const home = () => {
  const { closeForm, isTeamFormOpen, setIsTeamFromOpen } = useAddTeamFormState()
  const { favoriteBoards, changeFavorite } = useMainHomePage()

  return (
    <MainLayout>
      <Head>
        <title>Home | Pheidippides</title>
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
        </div>
      </div>
      <AddTeamFrom open={isTeamFormOpen} closeForm={closeForm} />
    </MainLayout>
  )
}

export default home
