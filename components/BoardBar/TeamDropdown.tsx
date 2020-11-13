import styles from "@/components/BoardBar/boardBar.module.scss"
import { IBoard, ITeam } from "@/models/interfaces"
import { ChangeEvent, useEffect, useRef, useState } from "react"
import CloseIcon from "@material-ui/icons/Close"
import ClickAwayListener from "@/components/ClickAwayListener/intex"
import { useRouter } from "next/router"
import Select from "@material-ui/core/Select"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/state/reducers"
import { Button } from "@material-ui/core"
import { boardChangeStart } from "@/state/actions/board.actions"

interface IProps {
  team: ITeam | undefined
  board: IBoard
}

const TeamDropdown = ({ team, board }: IProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [changeTeamOpen, setChangeTeamOpen] = useState(false)
  const [selectTeam, setSelectTeam] = useState(team?._id || "")

  const teams = useSelector((state: RootState) => state.team.teams)

  const ref = useRef<HTMLDivElement | null>(null)
  const router = useRouter()
  const dispatch = useDispatch()

  const toggleDropdown = () => {
    if (dropdownOpen) {
      setChangeTeamOpen(false)
    }
    setTimeout(() => setDropdownOpen(!dropdownOpen), 0)
    setSelectTeam(team?._id || "")
  }

  const onClickAway = () => {
    setDropdownOpen(false)
    setChangeTeamOpen(false)
    setSelectTeam(team?._id || "")
  }

  const changeHandler = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setSelectTeam(e.target.value as string)
  }

  const dispatchChangeTeam = () => {
    if (team?._id !== selectTeam) {
      dispatch(boardChangeStart({ board: { ...board, team: selectTeam } }))
    }
    setDropdownOpen(false)
    setChangeTeamOpen(false)
  }

  if (team) {
    return (
      <div>
        <div
          ref={ref}
          className={styles.teamDropdown}
          tabIndex={0}
          onClick={toggleDropdown}
        >
          {team.title}
        </div>
        {dropdownOpen && (
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
                <span>{team.title}</span>
              </div>
              {changeTeamOpen ? (
                <div className={styles.listContent}>
                  <div>
                    <p className={styles.changeMessage}>
                      This board is part of…
                    </p>
                    <Select
                      native
                      variant="outlined"
                      value={selectTeam}
                      onChange={changeHandler}
                      className={styles.select}
                    >
                      <option value={team._id}>{team.title}</option>
                      {teams.map((t) =>
                        t._id !== team._id ? (
                          <option key={t._id} value={t._id}>
                            {t.title}
                          </option>
                        ) : null
                      )}
                    </Select>
                    <Button
                      className={styles.changeButton}
                      onClick={() => dispatchChangeTeam()}
                    >
                      Change
                    </Button>
                  </div>
                </div>
              ) : (
                <div className={styles.listContent}>
                  <div
                    className={styles.listItem}
                    onClick={(e) => {
                      e.stopPropagation()
                      setChangeTeamOpen(true)
                    }}
                  >
                    Change Team...
                  </div>
                  <div
                    className={styles.listItem}
                    onClick={() =>
                      router.push(`/main/teams/${team.title}_${team._id}`)
                    }
                  >
                    View Team Page
                  </div>
                </div>
              )}
              <CloseIcon className={styles.closeButton} onClick={onClickAway} />
            </div>
          </ClickAwayListener>
        )}
      </div>
    )
  } else return null
}

export default TeamDropdown
