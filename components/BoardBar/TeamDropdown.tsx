import styles from "@/components/BoardBar/boardBar.module.scss"
import { ITeam } from "@/models/interfaces"

interface IProps {
  team: ITeam | undefined
}

const TeamDropdown = ({ team }: IProps) => {
  if (team) {
    return <div className={styles.teamDropdown}>{team.title}</div>
  } else return null
}

export default TeamDropdown
