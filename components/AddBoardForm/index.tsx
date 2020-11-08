import MenuItem from "@material-ui/core/MenuItem"
import Select from "@material-ui/core/Select"
import CloseIcon from "@material-ui/icons/Close"
import { Button } from "@material-ui/core"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import LanguageIcon from "@material-ui/icons/Language"
import CheckIcon from "@material-ui/icons/Check"
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined"
import ClickAwayListener from "@/components/ClickAwayListener/intex"
import useAddBoardForm from "@/components/AddBoardForm/useAddBoardForm"
import { BoardStatus } from "@/models/types"
import { colors } from "@/utils/colors"
import styles from "./addBoardForm.module.scss"

interface IProps {
  open: boolean
  closeForm: () => void
  status: BoardStatus
  pickedTeam: string | null
}

const AddBoardForm = ({ open, closeForm, status, pickedTeam }: IProps) => {
  const {
    handleChange,
    teams,
    onSubmit,
    formState,
    changeColor,
  } = useAddBoardForm({ status, closeForm, pickedTeam })

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
                {teams.length > 0 && status === "Team" && (
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
