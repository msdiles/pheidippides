import styles from "./addBoardForm.module.scss"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import CloseIcon from "@material-ui/icons/Close"
import ClickAwayListener from "@/components/ClickAwayListener/intex"
import { color, colors, randomColor } from "@/utils/colors"
import { Button } from "@material-ui/core"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/state/reducers"
import { BoardStatus } from "../../models/types"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import LanguageIcon from "@material-ui/icons/Language"
import CheckIcon from "@material-ui/icons/Check"
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined"
import { boardCreateStart } from "@/state/actions/board.actions"

interface IProps {
  open: boolean
  closeForm: () => void
  status: BoardStatus
  pickedTeam: string | null
}

const AddBoardForm = ({ open, closeForm, status, pickedTeam }: IProps) => {
  const { teams } = useSelector((state: RootState) => state.team)
  const userId = useSelector((state: RootState) => state.auth.user.userId)
  const color = randomColor()
  const dispatch = useDispatch()
  const [formState, setFormState] = useState({
    title: "",
    team: pickedTeam,
    status,
    color: color,
  })
  console.log(status, pickedTeam, formState.team)
  useEffect(() => {
    setFormState({ ...formState, team: pickedTeam, status })
  }, [pickedTeam, status])

  const handleChange = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setFormState({ ...formState, [e.target.name as string]: e.target.value })
  }

  const changeColor = (color: { color: string; title: color }) => {
    setFormState({ ...formState, color })
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      boardCreateStart({
        board: {
          ...formState,
          team: formState.team ? formState.team : null,
          color: formState.color.title,
          lists: [],
          date: Date.now().toString(),
          creator: userId,
        },
      })
    )
    closeForm()
    setFormState({
      title: "",
      team: status === "Team" && teams.length ? teams[0]._id : null,
      status,
      color: color,
    })
  }

  if (open) {
    return (
      <div className="click-catcher">
        <ClickAwayListener onClickAway={closeForm} catcher=".click-catcher">
          <div className={styles.addBoard}>
            <form
              className={styles.addBoardForm}
              style={{ backgroundColor: formState.color.color }}
              id="form"
              onSubmit={onSubmit}
            >
              <input
                value={formState.title}
                className={styles.input}
                id="title"
                placeholder="Add board Title"
                autoComplete="off"
                name="title"
                onChange={handleChange}
              />

              {teams.length && status === "Team" ? (
                <Select
                  value={formState.team ? formState.team : ""}
                  onChange={handleChange}
                  className={styles.select}
                  inputProps={{ "aria-label": "Without label" }}
                  name="team"
                >
                  {teams.map((team) => (
                    <MenuItem value={team._id} key={team._id}>
                      {team.title}
                    </MenuItem>
                  ))}
                </Select>
              ) : null}

              <Select
                value={formState.status ? formState.status : ""}
                onChange={handleChange}
                className={styles.select}
                inputProps={{ "aria-label": "Without label" }}
                name="status"
              >
                <MenuItem value="Private">
                  <LockOutlinedIcon fontSize="small" />
                  Private
                </MenuItem>
                {teams.length > 0 && (
                  <MenuItem value="Team">
                    <PeopleOutlinedIcon fontSize="small" />
                    Team
                  </MenuItem>
                )}
                <MenuItem value="Public">
                  <LanguageIcon fontSize="small" />
                  Public
                </MenuItem>
              </Select>
              <CloseIcon
                className={styles.closeButton}
                fontSize="small"
                onClick={closeForm}
              />
            </form>
            <div className={styles.colorPicker}>
              {colors.map((color) => (
                <div
                  className={styles.colorBlockCover}
                  key={color.title}
                  onClick={() => changeColor(color)}
                >
                  {formState.color.title === color.title && (
                    <CheckIcon className={styles.colorBlockChosen} />
                  )}
                  <div
                    title={color.title}
                    className={styles.colorBlock}
                    style={{ backgroundColor: color.color }}
                  />
                </div>
              ))}
            </div>
            <Button
              className={styles.submitButton}
              variant="contained"
              size="small"
              disabled={!formState.title}
              type="submit"
              form="form"
            >
              Create Board
            </Button>
          </div>
        </ClickAwayListener>
      </div>
    )
  }
  return null
}

export default AddBoardForm
