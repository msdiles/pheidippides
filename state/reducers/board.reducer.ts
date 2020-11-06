import { BoardActions } from "@/state/types/board.types"
import { IBoard } from "../../models/interfaces"

interface IBoardState {
  boards: IBoard[]
}

export const boardState: IBoardState = {
  boards: [],
}

const boardReducer = (state = boardState, action: BoardActions) => {
  switch (action.type) {
    default:
      return state
  }
}

export default boardReducer
