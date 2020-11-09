import { useSelector } from "react-redux"
import { RootState } from "@/state/reducers"
import { IBoard, ITeam } from "@/models/interfaces"
import { useEffect, useState } from "react"

interface IProps {
  board: IBoard
}

const useBoardBar = ({ board }: IProps) => {
  const [team, setTeam] = useState<ITeam | undefined>(undefined)
  const { favoriteBoards } = useSelector((state: RootState) => state.auth.user)
  const teams = useSelector((state: RootState) => state.team.teams)

  useEffect(() => {
    setTeam(teams.find((t) => t._id === board.team))
  }, [board.team])

  return { favoriteBoards, team }
}

export default useBoardBar
