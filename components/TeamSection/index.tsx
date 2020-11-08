import styles from "./teamSection.module.scss"
import { ITeam } from "@/models/interfaces"
import { randomColor } from "@/utils/colors"
import { useRouter } from "next/router"

interface IProps {
  team?: ITeam
  empty?: boolean
  openForm?: (e: React.MouseEvent) => void
}

const TeamSection = ({ team, empty, openForm }: IProps) => {
  const router = useRouter()

  if (empty) {
    return (
      <div className={styles.teamSection} onClick={openForm}>
        <div className={styles.teamSectionInner}>Create new team</div>
      </div>
    )
  }
  if (team) {
    return (
      <div
        className={styles.teamSection}
        style={{ backgroundColor: randomColor().color }}
        onClick={() => router.push(`/main/teams/${team.title}_${team?._id}`)}
      >
        <div className={styles.teamSectionInner}>
          <p className={styles.title}>{team?.title}</p>
        </div>
      </div>
    )
  }
  return null
}

export default TeamSection
