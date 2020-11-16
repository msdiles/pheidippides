import styles from "./board.module.scss"
import MainLayout from "@/components/layouts/MainLayout"
import useSeparateBoard from "@/hooks/useSeparateBoard"
import BoardBar from "@/components/BoardBar"
import PageLoader from "@/components/PageLoader"
import BoardBody from "@/components/BoardBody"
import ColorProvider from "@/components/ColorContext"

const board = () => {
  const { board, color, setCalendarOpen, isCalendarOpen } = useSeparateBoard()

  if (!board) {
    return <PageLoader open={true} />
  }

  return (
    <ColorProvider>
      <MainLayout color={color}>
        <BoardBar
          board={board}
          isCalendarOpen={isCalendarOpen}
          setCalendarOpen={setCalendarOpen}
          style={{ backgroundColor: color }}
        />
        <div className={styles.boardMain} style={{ backgroundColor: color }}>
          <BoardBody board={board} />
        </div>
      </MainLayout>
    </ColorProvider>
  )
}

export default board
