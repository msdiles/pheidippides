import styles from "./addList.module.scss"
import { useRef, useState } from "react"
import AddIcon from "@material-ui/icons/Add"
import { Button } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"
import ClickAwayListener from "@/components/ClickAwayListener/intex"
import { useDispatch, useSelector } from "react-redux"
import { listCreateStart } from "@/state/actions/board.actions"
import { RootState } from "@/state/reducers"
import { IBoard } from "@/models/interfaces"

interface IProps {
  board: IBoard
}

const AddList = ({ board }: IProps) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const userId = useSelector((state: RootState) => state.auth.user.userId)
  const ref = useRef<HTMLInputElement | null>(null)
  const dispatch = useDispatch()

  const toggleOpen = () => {
    setTimeout(() => {
      setOpen(!open)
      if (!open) {
        ref.current?.focus()
      }
    }, 0)
  }

  const onClickAway = () => {
    setOpen(false)
  }

  const addList = (e: React.FormEvent) => {
    e.preventDefault()
    if (!value) {
      ref.current?.focus()
    } else {
      dispatch(
        listCreateStart({
          list: {
            cards: [],
            title: value,
            date: Date.now().toString(),
            creator: userId,
          },
          boardId: board._id,
        })
      )
    }
  }

  return (
    <>
      <ClickAwayListener onClickAway={onClickAway}>
        <form
          className={`${styles.addList} ${open ? styles.addListOpen : null}`}
          onClick={!open ? toggleOpen : () => {}}
          onSubmit={(e) => addList(e)}
        >
          {open ? (
            <div className={styles.input}>
              <input
                placeholder="Enter list title..."
                ref={ref}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          ) : (
            <div className={styles.placeholder}>
              <AddIcon />
              <p>Add a list</p>
            </div>
          )}

          <div
            className={open ? styles.additionalOpen : styles.additionalClose}
          >
            <div className={styles.additionalInner}>
              <Button type="submit">Add List</Button>
              <CloseIcon onClick={toggleOpen} className={styles.closeButton} />
            </div>
          </div>
        </form>
      </ClickAwayListener>
    </>
  )
}

export default AddList
