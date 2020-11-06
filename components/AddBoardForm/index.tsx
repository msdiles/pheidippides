import styles from "./addBoardForm.module.scss"
import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import CloseIcon from "@material-ui/icons/Close"
import ClickAwayListener from "@/components/ClickAwayListener/intex"
import { colors, randomColor } from "@/utils/colors"
import { Button } from "@material-ui/core"
import { ChangeEvent, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "@/state/reducers"
import { BoardStatus } from "../../models/types"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import LanguageIcon from "@material-ui/icons/Language"
import CheckIcon from "@material-ui/icons/Check"

interface IProps {
  open: boolean
  closeForm: () => void
  status: BoardStatus
}

const AddBoardForm = ({ open, closeForm, status }: IProps) => {
  const { teams } = useSelector((state: RootState) => state.team)
  const color = randomColor()
  const [formState, setFormState] = useState({
    title: "",
    team: status === "Team" && teams.length ? teams[1].title : "Private",
    status,
    color: color,
  })

  const handleChange = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setFormState({ ...formState, [e.target.name as string]: e.target.value })
  }

  const changeColor = (color: { color: string; title: string }) => {
    setFormState({ ...formState, color })
  }

  if (open) {
    return (
      <div className="addBoardClickCatcher">
        <ClickAwayListener
          onClickAway={closeForm}
          catcher=".addBoardClickCatcher"
        >
          <div className={styles.addBoard}>
            <div
              className={styles.addBoardForm}
              style={{ backgroundColor: formState.color.color }}
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

              {!teams.length ||
                (status === "Private" && (
                  <Select
                    value={formState.team ? formState.team : ""}
                    onChange={handleChange}
                    className={styles.select}
                    inputProps={{ "aria-label": "Without label" }}
                    name="team"
                  >
                    {teams.map((team) => (
                      <MenuItem value={team.title} key={team._id}>
                        {team.title}
                      </MenuItem>
                    ))}
                  </Select>
                ))}

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
            </div>
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
