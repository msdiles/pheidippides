import styles from "@/components/BoardBar/boardBar.module.scss"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import ClickAwayListener from "@/components/ClickAwayListener/intex"
import CloseIcon from "@material-ui/icons/Close"
import { Button } from "@material-ui/core"

const InviteButton = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const ref = useRef<HTMLDivElement | null>(null)
  const dispatch = useDispatch()

  const toggleOpen = () => {
    setTimeout(() => setOpen(!open), 0)
  }

  const onClickAway = () => {
    setOpen(false)
  }

  const sendInvite = () => {
    // dispatch(boardChangeStart({ board: { ...board, status } }))
    onClickAway()
  }
  return (
    <div>
      <div
        tabIndex={0}
        className={styles.inviteButton}
        onClick={toggleOpen}
        ref={ref}
      >
        Invite
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
              <span>Invite To Board</span>
            </div>
            <div className={styles.listContent}>
              <input
                className={styles.inviteInput}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button
                className={styles.sendInviteButton}
                onClick={sendInvite}
                disabled={!value}
              >
                Send Invitation
              </Button>
            </div>
            <CloseIcon className={styles.closeButton} onClick={onClickAway} />
          </div>
        </ClickAwayListener>
      )}
    </div>
  )
}

export default InviteButton
