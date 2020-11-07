import styles from "./addTeamForm.module.scss"
import ClickAwayListener from "@/components/ClickAwayListener/intex"
import TextField from "@material-ui/core/TextField"
import Select from "@material-ui/core/Select"
import MenuItem from "@material-ui/core/MenuItem"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import LanguageIcon from "@material-ui/icons/Language"
import CloseIcon from "@material-ui/icons/Close"
import { Button } from "@material-ui/core"
import { FormEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { teamCreateStart } from "@/state/actions/team.actions"
import { RootState } from "@/state/reducers"
import { TeamStatus } from "../../models/types"

interface IProps {
  open: boolean
  closeForm: () => void
}

const AddTeamFrom = ({ open, closeForm }: IProps) => {
  const [formState, setFormState] = useState<{
    title: string
    status: TeamStatus
    description: string
  }>({
    title: "",
    status: "Private",
    description: "",
  })
  const userId = useSelector((state: RootState) => state.auth.user.userId)

  const dispatch = useDispatch()

  const handleChange = (
    e: React.ChangeEvent<{ name?: string | undefined; value: unknown }>
  ) => {
    setFormState({ ...formState, [e.target.name as string]: e.target.value })
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      teamCreateStart({
        team: {
          ...formState,
          creator: userId,
          date: Date.now().toString(),
          members: [],
          boards: [],
        },
      })
    )
    closeForm()
    setFormState({
      title: "",
      status: "Private",
      description: "",
    })
  }

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
