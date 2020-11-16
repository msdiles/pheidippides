import styles from "./listOfList.module.scss"
import { IBoard } from "@/models/interfaces"
import List from "@/components/List"
import { useEffect, useRef, useState } from "react"
import BoardScrollbar from "@/components/BoardScrollbar"
import AddList from "@/components/AddList"

interface IProps {
  board: IBoard
}

const ListOfList = ({ board }: IProps) => {
  const [scrollWidth, setScrollWidth] = useState(window.innerWidth)
  const [scrollPosition, setScrollPosition] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollLeft =
        scrollPosition * (scrollWidth / (window.innerWidth - 16))
    }
  }, [scrollPosition])

  useEffect(() => {
    if (ref.current?.scrollWidth) {
      setScrollWidth(ref.current.scrollWidth)
    }
  }, [ref.current?.scrollWidth, board])

  return (
    <>
      <div className={styles.lists} ref={ref}>
        {board.lists.map((list) => (
          <List key={list._id} list={list} />
        ))}
        <AddList board={board} />
      </div>

      <BoardScrollbar
        scrollWidth={scrollWidth}
        setScrollPosition={setScrollPosition}
        scrollPosition={scrollPosition}
      />
    </>
  )
}

export default ListOfList
