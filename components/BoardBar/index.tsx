import styles from "./boardBar.module.scss"
import useBoardBar from "@/components/BoardBar/useBoardBar"
import { IBoard } from "@/models/interfaces"
import OptionsDropdown from "@/components/BoardBar/OptionsDropdown"
import FavoriteButton from "@/components/BoardBar/FavoriteButton"
import TeamDropdown from "@/components/BoardBar/TeamDropdown"
import VisibilityDropdown from "@/components/BoardBar/VisibilityDropdown"
import ProfileIcon from "@/components/BoardBar/ProfileIcon"
import MenuButton from "@/components/BoardBar/MenuButton"
import InviteButton from "@/components/BoardBar/InviteButton"
import BoardTitle from "@/components/BoardBar/BoardTitle"

interface IProps {
  board: IBoard
  isCalendarOpen: boolean
  setCalendarOpen: (isOpen: boolean) => void
}

const BoardBar = ({ board, isCalendarOpen, setCalendarOpen }: IProps) => {
  const { favoriteBoards, team } = useBoardBar({ board })
  return (
    <div className={styles.boardBar}>
      <OptionsDropdown
        setCalendarOpen={setCalendarOpen}
        isCalendarOpen={isCalendarOpen}
      />
      <BoardTitle board={board} />
      <FavoriteButton favoriteBoards={favoriteBoards} board={board} />
      <div className={styles.divider} />
      <TeamDropdown team={team} board={board} />
      {team && <div className={styles.divider} />}
      <VisibilityDropdown team={team} board={board} />
      <div className={styles.divider} />
      <ProfileIcon />
      <InviteButton />
      <MenuButton />
    </div>
  )
}

export default BoardBar
