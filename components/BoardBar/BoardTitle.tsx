import styles from "@/components/BoardBar/boardBar.module.scss"
import { IBoard } from "@/models/interfaces"
import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { boardChangeStart } from "@/state/actions/board.actions"

interface IProps {
  board: IBoard
}

const BoardTitle = ({ board }: IProps) => {
  const [boardTitle, setBoardTitle] = useState("")
  const [isFocus, setIsFocus] = useState(false)

  const refInput = useRef<HTMLInputElement | null>(null)
  const refDiv = useRef<HTMLDivElement | null>(null)

  const dispatch = useDispatch()

  useEffect(() => {
    setBoardTitle(board.title)
  }, [board.title])

  const focusInput = (
    e: React.MouseEvent<HTMLDivElement> | React.FocusEvent<HTMLDivElement>
  ) => {
    e.preventDefault()
    setIsFocus(true)
    setTimeout(() => {
      refInput.current?.focus()
    }, 0)
  }

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(false)
    if (!e.target.value.trim()) {
      setBoardTitle(board.title)
    } else if (board.title !== boardTitle) {
      dispatch(boardChangeStart({ board: { ...board, title: boardTitle } }))
    }
  }

  return (
    <>
      <input
        type="text"
        tabIndex={0}
        value={boardTitle}
        className={`${styles.boardTitle} ${
          isFocus ? styles.boardTitleActive : styles.boardTitleUnActive
        }`}
        onBlur={onBlur}
        onChange={(e) => setBoardTitle(e.target.value)}
        ref={refInput}
        style={{ width: refDiv.current?.offsetWidth }}
      />
      <div
        className={`${styles.boardTitle} ${
          isFocus ? styles.boardTitleUnActive : styles.boardTitleActive
        }`}
        onFocus={(e) => focusInput(e)}
        onClick={(e) => focusInput(e)}
        tabIndex={0}
        ref={refDiv}
      >
        {boardTitle}
      </div>
    </>
  )
}

export default BoardTitle
