import styles from "@/components/BoardBar/boardBar.module.scss"
import { ReactNode, useRef, useState } from "react"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined"
import LanguageIcon from "@material-ui/icons/Language"
import { IBoard, ITeam } from "@/models/interfaces"
import ClickAwayListener from "@/components/ClickAwayListener/intex"
import CheckIcon from "@material-ui/icons/Check"
import CloseIcon from "@material-ui/icons/Close"
import { useDispatch } from "react-redux"
import { boardChangeStart } from "@/state/actions/board.actions"
import { BoardStatus } from "@/models/types"

const statusIcons: { [key: string]: ReactNode } = {
  Private: <LockOutlinedIcon />,
  Team: <PeopleOutlinedIcon />,
  Public: <LanguageIcon />,
}

interface IProps {
  team: ITeam | undefined
  board: IBoard
}

const VisibilityDropdown = ({ team, board }: IProps) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const dispatch = useDispatch()

  const toggleOpen = () => {
    setTimeout(() => setOpen(!open), 0)
  }

  const onClickAway = () => {
    setOpen(false)
  }

  const changeStatus = (status: BoardStatus) => {
    dispatch(boardChangeStart({ board: { ...board, status } }))
  }

  return (
    <div>
      <div
        className={styles.visibilityDropdown}
        tabIndex={0}
        onClick={toggleOpen}
        ref={ref}
      >
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
      {open && (
        <ClickAwayListener onClickAway={onClickAway}>
          <div
            className={styles.list}
            style={{
              left: ref.current
                ? ref.current.getBoundingClientRect().left + "px"
                : "1rem",
            }}
          >
            <div className={styles.listTitle}>
              <span>Change Visibility</span>
            </div>
            <div
              className={styles.listItem}
              onClick={() => changeStatus("Private")}
            >
              <div className={styles.listItemTitle}>
                <LockOutlinedIcon
                  fontSize="small"
                  style={{ color: "#eb5a46" }}
                />
                Private
                {board.status === "Private" && <CheckIcon />}
              </div>
              <span> Only board members can see and edit this board.</span>
            </div>
            <div
              className={styles.listItem}
              onClick={() => changeStatus("Team")}
            >
              <div className={styles.listItemTitle}>
                <PeopleOutlinedIcon
                  fontSize="small"
                  style={{ color: "#42526e" }}
                />
                Team
                {board.status === "Team" && <CheckIcon />}
              </div>
              <span>
                All members of the 1 team can see and edit this board.
              </span>
            </div>
            <div
              className={styles.listItem}
              onClick={() => changeStatus("Public")}
            >
              <div className={styles.listItemTitle}>
                <LanguageIcon fontSize="small" style={{ color: "#61bd4f" }} />
                Public
                {board.status === "Public" && <CheckIcon />}
              </div>
              <span>
                Anyone on the internet can see this board. Only board members
                can edit.
              </span>
            </div>
            <CloseIcon className={styles.closeButton} onClick={onClickAway} />
          </div>
        </ClickAwayListener>
      )}
    </div>
  )
}

export default VisibilityDropdown
