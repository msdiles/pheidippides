import { BoardStatus, TeamStatus } from "./types"
import { color } from "@/utils/colors"

export interface ITeamCreated {
  title: string
  creator: string
  date: string
  description: string
  status: TeamStatus
  members: string[]
  boards: string[]
}

export interface ITeam extends ITeamCreated {
  _id: string
}

export interface ICardCreated {
  title: string
  creator: string
  date: string
}

export interface ICard extends ICardCreated {
  _id: string
}

export interface IListCreated {
  title: string
  date: string
  creator: string
  cards: ICard[]
}

export interface IList extends IListCreated {
  _id: string
}

export interface IBoardCreated {
  title: string
  creator: string
  date: string
  status: BoardStatus
  team: string | null
  lists: IList[]
  color: color
}

export interface IBoard extends IBoardCreated {
  _id: string
}
