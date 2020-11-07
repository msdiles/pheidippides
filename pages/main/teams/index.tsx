import MainSidebar from "@/components/MainSidebar"
import MainLayout from "@/components/layouts/MainLayout"
import styles from "./teams.module.scss"
import { RootState } from "@/state/reducers"
import { useDispatch, useSelector } from "react-redux"
import TeamSection from "@/components/TeamSection"
import AddTeamFrom from "@/components/AddTeamForm"
import { useEffect, useState } from "react"
import { boardGetAllStart } from "@/state/actions/board.actions"
import { teamGetAllStart } from "@/state/actions/team.actions"

const teams = () => {
  const teams = useSelector((state: RootState) => state.team.teams)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const userId = useSelector((state: RootState) => state.auth.user.userId)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(boardGetAllStart({ userId }))
    dispatch(teamGetAllStart({ userId }))
  }, [])

  return (
    <MainLayout style={{ overflow: isFormOpen ? "hidden" : "auto" }}>
      <div className="main-section">
        <MainSidebar />
        <div className={styles.main}>
          {teams.map((team) => (
            <TeamSection team={team} key={team._id} />
          ))}
          <TeamSection
            empty={true}
            openForm={(e: React.MouseEvent) => {
              e.stopPropagation()
              setIsFormOpen(true)
            }}
          />
        </div>
      </div>
      <AddTeamFrom open={isFormOpen} closeForm={() => setIsFormOpen(false)} />
    </MainLayout>
  )
}

export default teams
