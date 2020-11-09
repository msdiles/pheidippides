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
    <>
      <div
        className={styles.optionsDropdown}
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setOpen(!open)
        }}
      >
        <ViewWeekOutlinedIcon fontSize="small" />
        {chosen}
        <KeyboardArrowDownOutlinedIcon />
      </div>
      {open && (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
          <List className={styles.optionsDropdownList}>
            <ListItem
              button
              selected={chosen === "Board"}
              onClick={() => setChosen("Board")}
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
              button
              selected={chosen === "Calendar"}
              onClick={() => setChosen("Calendar")}
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
    </>
  )
}

export default OptionsDropdown
