import ViewWeekOutlinedIcon from "@material-ui/icons/ViewWeekOutlined"
import KeyboardArrowDownOutlinedIcon from "@material-ui/icons/KeyboardArrowDownOutlined"
import List from "@material-ui/core/List"
import DateRangeIcon from "@material-ui/icons/DateRange"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import styles from "./boardBar.module.scss"
import { useState } from "react"
import { ClickAwayListener } from "@material-ui/core"

interface IProps {
  isCalendarOpen: boolean
  setCalendarOpen: (isOpen: boolean) => void
}

const OptionsDropdown = ({ isCalendarOpen, setCalendarOpen }: IProps) => {
  const [open, setOpen] = useState(false)
  const [chosen, setChosen] = useState("Board")

  return (
    <div>
      <div
        className={styles.optionsDropdown}
        tabIndex={0}
        onClick={() => setTimeout(() => setOpen(!open), 0)}
      >
        <ViewWeekOutlinedIcon fontSize="small" />
        {chosen}
        <KeyboardArrowDownOutlinedIcon />
      </div>
      {open && (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <List className={styles.optionsDropdownList}>
            <ListItem
              tabIndex={0}
              button
              selected={chosen === "Board"}
              onClick={() => setChosen("Board")}
              className={
                chosen === "Board" ? styles.optionsDropdownListActive : ""
              }
            >
              <ListItemText
                primary={
                  <div className={styles.optionsDropdownTitle}>
                    <ViewWeekOutlinedIcon />
                    Board
                  </div>
                }
                secondary={"Organize cards in lists on a board."}
              />
            </ListItem>
            <ListItem
              tabIndex={0}
              button
              selected={chosen === "Calendar"}
              onClick={() => setChosen("Calendar")}
              className={
                chosen === "Calendar" ? styles.optionsDropdownListActive : ""
              }
            >
              <ListItemText
                primary={
                  <div className={styles.optionsDropdownTitle}>
                    <DateRangeIcon />
                    Calendar
                  </div>
                }
                secondary={
                  "See cards with due dates in a monthly or weekly format."
                }
              />
            </ListItem>
          </List>
        </ClickAwayListener>
      )}
    </div>
  )
}

export default OptionsDropdown
