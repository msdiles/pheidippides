import TextField from "@material-ui/core/TextField"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import LanguageIcon from "@material-ui/icons/Language"
import CloseIcon from "@material-ui/icons/Close"
import { Button } from "@material-ui/core"
import ClickAwayListener from "@/components/ClickAwayListener/intex"
import useAddTeamForm from "@/components/AddTeamForm/useAddTeamForm"
import styles from "./addTeamForm.module.scss"

interface IProps {
  open: boolean
  closeForm: () => void
}

const AddTeamFrom = ({ open, closeForm }: IProps) => {
  const { handleChange, onSubmit, formState } = useAddTeamForm({ closeForm })

  if (open) {
    return (
      <div className="click-catcher">
        <ClickAwayListener onClickAway={closeForm} catcher=".click-catcher">
          <div className={styles.addTeam}>
            <form className={styles.addTeamForm} id="form" onSubmit={onSubmit}>
              <h4>Let's Build a Team</h4>
              <TextField
                value={formState.title}
                name="title"
                label="Team Name"
                className={styles.titleInput}
                placeholder="Team Name"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={handleChange}
              />

              <Select
                value={formState.status ? formState.status : ""}
                onChange={handleChange}
                className={styles.select}
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

              <TextField
                value={formState.description}
                name="description"
                label="Team Description"
                multiline
                rows={6}
                variant="outlined"
                className={styles.textarea}
                placeholder="Team Description"
                onChange={handleChange}
              />

              <Button
                className={styles.submitButton}
                variant="contained"
                disabled={!formState.title}
                type="submit"
                form="form"
              >
                Create Team
              </Button>

              <CloseIcon
                className={styles.closeButton}
                fontSize="small"
                onClick={closeForm}
              />
            </form>
          </div>
        </ClickAwayListener>
      </div>
    )
  } else {
    return null
  }
}

export default AddTeamFrom
