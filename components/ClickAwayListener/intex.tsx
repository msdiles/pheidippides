import { ReactNode, useEffect, useRef, useState } from "react"

interface IProps {
  children: ReactNode
  onClickAway: () => void
  catcher?: string
}

const ClickAwayListener = ({ children, onClickAway, catcher }: IProps) => {
  const [catcherEl, setCatcherEl] = useState<Element | Document>(document)
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (catcher) {
      setCatcherEl(document.querySelector(catcher) || document)
    }

    function listener(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) {
        onClickAway()
      }
    }
    catcherEl.addEventListener("click", listener as (e: Event) => void)

    return () => {
      catcherEl.removeEventListener("click", listener as (e: Event) => void)
    }
  }, [catcherEl])

  return <div ref={ref}>{children}</div>
}

export default ClickAwayListener
