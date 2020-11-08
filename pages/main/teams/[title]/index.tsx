import useAddTeamFormState from "@/hooks/useAddTeamFormState"
import MainLayout from "@/components/layouts/MainLayout"
import MainSidebar from "@/components/MainSidebar"
import AddTeamFrom from "@/components/AddTeamForm"
import useTeamPage from "@/hooks/useTeamPage"
import styles from "./team.module.scss"
import Head from "next/head"

const team = () => {
  const { closeForm, isTeamFormOpen, setIsTeamFromOpen } = useAddTeamFormState()
  const { team } = useTeamPage()

  if (team) {
    return (
      <MainLayout>
        <Head>
          <title>{team.title.toUpperCase()} | Pheidippides</title>
        </Head>
        <div className="main-section">
          <MainSidebar setIsFormOpen={setIsTeamFromOpen} />
          <div className={styles.main}>
            <p> Team Name:{team.title}</p>
            <p>Members:</p>
            {team.members.map((member) => {
              return <p key={member._id}>{member.username}</p>
            })}
          </div>
        </div>
        <AddTeamFrom open={isTeamFormOpen} closeForm={closeForm} />
      </MainLayout>
    )
  } else {
    return (
      <MainLayout>
        <div className="main-section">
          <MainSidebar setIsFormOpen={setIsTeamFromOpen} />
          <div className={styles.error}>
            <div className={styles.errorTitle}>Page not found.</div>
            <p className={styles.errorMessage}>
              This page may be private. If someone gave you this link, they may
              need to invite you to one of their boards or teams.
            </p>
          </div>
        </div>
        <AddTeamFrom open={isTeamFormOpen} closeForm={closeForm} />
      </MainLayout>
    )
  }
}

export default team
