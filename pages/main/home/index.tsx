import MainSidebar from "@/components/MainSidebar"
import MainLayout from "@/components/layouts/MainLayout"
import styles from "./home.module.scss"
import AddTeamFrom from "@/components/AddTeamForm"
import useAddTeamFormState from "@/hooks/useAddTeamFormState"
import Head from "next/head"

const home = () => {
  const { closeForm, isTeamFormOpen, setIsTeamFromOpen } = useAddTeamFormState()
  return (
    <MainLayout>
      <Head>
        <title>Home | Pheidippides</title>
      </Head>
      <div className="main-section">
        <MainSidebar setIsFormOpen={setIsTeamFromOpen} />
        <div className={styles.main}> home</div>
      </div>
      <AddTeamFrom open={isTeamFormOpen} closeForm={closeForm} />
    </MainLayout>
  )
}

export default home
