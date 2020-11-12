import styles from "./addList.module.scss"
import { useState } from "react"
import AddIcon from "@material-ui/icons/Add"
import { Button } from "@material-ui/core"
import CloseIcon from "@material-ui/icons/Close"

const AddList = () => {
  const [open, setOpen] = useState(false)

  const toggleOpen = () => {
    setTimeout(() => setOpen(!open), 0)
  }

  const onClickAway = () => {
    setOpen(false)
  }

  return (
    <>
      <div
        className={`${styles.addList} ${open ? styles.addListOpen : null}`}
        onClick={toggleOpen}
      >
        {open ? (
          <div className={styles.input}>
            <input />
          </div>
        ) : (
          <div className={styles.placeholder}>
            <AddIcon />
            <p>Add a list</p>
          </div>
        )}

        <div className={open ? styles.additionalOpen : styles.additionalClose}>
          <div className={styles.additionalInner}>
            <Button>Add List</Button>
            <CloseIcon />
          </div>
        </div>
      </div>
    </>
  )
}

export default AddList
