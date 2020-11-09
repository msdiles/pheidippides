import styles from "@/components/BoardBar/boardBar.module.scss"
import { ReactNode } from "react"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined"
import LanguageIcon from "@material-ui/icons/Language"
import { ITeam } from "@/models/interfaces"

const statusIcons: { [key: string]: ReactNode } = {
  Private: <LockOutlinedIcon />,
  Team: <PeopleOutlinedIcon />,
  Public: <LanguageIcon />,
}

interface IProps {
  team: ITeam | undefined
}

const VisibilityDropdown = ({ team }: IProps) => {
  return (
    <div className={styles.visibilityDropdown}>
      {team ? (
        <>
          {statusIcons[team.status]}
          {team.title}
        </>
      ) : (
        <>
          {statusIcons["Private"]}
          Private
        </>
      )}
    </div>
  )
}

export default VisibilityDropdown
