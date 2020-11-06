export interface ITeamCreated {
  title: string
  creator: string
  date: string
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
  personal: boolean
  team: string | null
  lists: IList[]
}

export interface IBoard extends IBoardCreated {
  _id: string
}
