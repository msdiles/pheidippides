import styles from "./teamSection.module.scss"
import { ITeam } from "../../models/interfaces"

interface IProps {
  team?: ITeam
  empty?: boolean
  openForm?: (e: React.MouseEvent) => void
}

const TeamSection = ({ team, empty, openForm }: IProps) => {
  if (empty) {
    return (
      <div className={styles.teamSection} onClick={openForm}>
        Create new team
      </div>
    )
  }
  return <div className={styles.teamSection}></div>
}

export default TeamSection
