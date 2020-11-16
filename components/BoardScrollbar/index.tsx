import styles from "./boardScrollbar.module.scss"
import { useContext, useEffect, useRef, useState } from "react"
import { ColorContext } from "@/components/ColorContext"
import { darken } from "@material-ui/core/styles/colorManipulator"

interface IProps {
  scrollWidth: number
  setScrollPosition: (left: number) => void
  scrollPosition: number
}

const BoardScrollbar = ({
  scrollWidth,
  setScrollPosition,
  scrollPosition,
}: IProps) => {
  const [windowWidth, setWindowWidth] = useState([
    window.innerWidth,
    window.innerWidth,
  ])
  const { color } = useContext(ColorContext)
  const [test, setTest] = useState(0)
  const [thumbWidth, setThumbWidth] = useState(0)
  const [trackWidth, setTrackWidth] = useState(0)
  const [thumbPosition, setThumbPosition] = useState(0)

  const outer = useRef<HTMLDivElement>(null)
  const inner = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollWidth > window.innerWidth && outer.current) {
      setThumbWidth(
        outer.current.clientWidth * (window.innerWidth / scrollWidth)
      )
    } else {
      setThumbWidth(0)
    }
  }, [scrollWidth, outer.current])

  useEffect(() => {
    if (outer.current) {
      const tmbWidth =
        outer.current?.clientWidth * (window.innerWidth / scrollWidth)
      const tmbPosition =
        scrollPosition -
        ((windowWidth[0] - windowWidth[1]) * window.innerWidth) / scrollWidth
      if (tmbWidth + tmbPosition > outer.current.clientWidth) {
        const changePositionPoint = outer.current.clientWidth - tmbWidth
        setThumbPosition(changePositionPoint)
        setThumbWidth(tmbWidth)
      } else if (tmbPosition < 0) {
        setThumbPosition(0)
        setThumbWidth(tmbWidth + tmbPosition)
      } else {
        setThumbWidth(tmbWidth)
        setThumbPosition(tmbPosition)
      }
    } else {
      setThumbWidth(0)
    }
  }, [windowWidth])

  useEffect(() => {
    const listener = () => {
      setWindowWidth([windowWidth[1], window.innerWidth])
    }
    window.addEventListener("resize", listener)

    return () => window.removeEventListener("resize", listener)
  }, [scrollWidth])

  const moveScrollbar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.currentTarget
    let shiftX = e.clientX - (inner.current?.getBoundingClientRect()?.left || 0)
    ondragstart = (e) => {
      e.preventDefault()
    }
    document.onmousemove = (e) => {
      const left =
        e.clientX - shiftX < 0
          ? 0
          : e.clientX - shiftX >
            (outer.current?.clientWidth || 0) -
              (inner.current?.clientWidth || 0)
          ? (outer.current?.clientWidth || 0) -
            (inner.current?.clientWidth || 0)
          : e.clientX - shiftX
      setThumbPosition(left)
      setScrollPosition(left)
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }

  if (scrollWidth > window.innerWidth) {
    return (
      <div
        className={styles.boardScrollbarTrack}
        ref={outer}
        style={color ? { backgroundColor: darken(color, 0.15) } : undefined}
      >
        <div
          className={styles.boardScrollbarThumb}
          onMouseDown={(e) => moveScrollbar(e)}
          ref={inner}
          draggable={false}
          style={{
            width: thumbWidth + "px",
            left: thumbPosition + "px",
          }}
        />
      </div>
    )
  } else {
    return null
  }
}

export default BoardScrollbar
