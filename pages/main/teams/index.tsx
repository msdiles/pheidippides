import MainSidebar from "@/components/MainSidebar"
import MainLayout from "@/components/layouts/MainLayout"
import TeamSection from "@/components/TeamSection"
import AddTeamFrom from "@/components/AddTeamForm"
import useAddTeamFormState from "@/hooks/useAddTeamFormState"
import useTeamsPage from "@/hooks/useTeamsPage"
import styles from "./teams.module.scss"
import Head from "next/head"

const teams = () => {
  const { closeForm, isTeamFormOpen, setIsTeamFromOpen } = useAddTeamFormState()
  const { teams } = useTeamsPage()

  return (
    <MainLayout style={{ overflow: isTeamFormOpen ? "hidden" : "auto" }}>
      <Head>
        <title>Teams | Pheidippides</title>
      </Head>
      <div className="main-section">
        <MainSidebar setIsFormOpen={setIsTeamFromOpen} />
        <div className={styles.main}>
          {teams.map((team) => (
            <TeamSection team={team} key={team._id} />
          ))}
          <TeamSection
            empty={true}
            openForm={(e: React.MouseEvent) => {
              e.stopPropagation()
              setIsTeamFromOpen(true)
            }}
          />
        </div>
      </div>
      <AddTeamFrom open={isTeamFormOpen} closeForm={closeForm} />
    </MainLayout>
  )
}

export default teams
