import styles from "./board.module.scss"
import MainLayout from "@/components/layouts/MainLayout"
import useSeparateBoard from "@/hooks/useSeparateBoard"
import BoardBar from "@/components/BoardBar"
import PageLoader from "@/components/PageLoader"
import BoardBody from "@/components/BoardBody"

const board = () => {
  const { board, color, setCalendarOpen, isCalendarOpen } = useSeparateBoard()

  if (!board) {
    return <PageLoader open={true} />
  }

  return (
    <MainLayout color={color}>
      <div className={styles.boardMain} style={{ backgroundColor: color }}>
        <BoardBar
          board={board}
          isCalendarOpen={isCalendarOpen}
          setCalendarOpen={setCalendarOpen}
        />
        <BoardBody />
      </div>
    </MainLayout>
  )
}

export default board
