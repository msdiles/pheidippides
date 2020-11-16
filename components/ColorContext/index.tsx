import { createContext, ReactNode, useState } from "react"

interface IContext {
  color: string
  setColor: (c: string) => void
  removeColor: () => void
}

export const ColorContext = createContext({} as IContext)

interface IProps {
  children: ReactNode
}

const ColorProvider = ({ children }: IProps) => {
  const [color, _setColor] = useState("#026AA7")
  const setColor = (c: string) => _setColor(c)
  const removeColor = () => setColor("#026AA7")
  return (
    <ColorContext.Provider value={{ color, setColor, removeColor }}>
      {children}
    </ColorContext.Provider>
  )
}

export default ColorProvider
