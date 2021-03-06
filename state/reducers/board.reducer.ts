import { BoardActions, BoardActionTypes } from "@/state/types/board.types"
import { IBoard } from "@/models/interfaces"

interface IBoardState {
  boards: IBoard[]
  loading: boolean
}

export const boardState: IBoardState = {
  boards: [],
  loading: false,
}

const boardReducer = (state = boardState, action: BoardActions) => {
  switch (action.type) {
    case BoardActionTypes.BOARD_CREATE_DONE:
      return {
        ...state,
        boards: [...state.boards, action.payload.target],
      }
    case BoardActionTypes.BOARD_GET_ALL_DONE:
      return {
        ...state,
        boards: action.payload.target,
      }
    case BoardActionTypes.BOARD_DELETE_DONE:
      return {
        ...state,
        boards: state.boards.filter(
          (board) => board._id !== action.payload.target
        ),
      }
    case BoardActionTypes.BOARD_CHANGE_DONE:
      return {
        ...state,
        boards: state.boards.map((board) =>
          board._id === action.payload.target._id
            ? action.payload.target
            : board
        ),
      }
    case BoardActionTypes.BOARD_LOADING:
      return {
        ...state,
        loading: true,
      }
    case BoardActionTypes.BOARD_ENDING:
      return {
        ...state,
        loading: false,
      }
    case BoardActionTypes.LIST_CREATE_DONE:
      console.log(action.payload)
      return {
        ...state,
        boards: state.boards.map((board) =>
          board._id === action.payload.boardId
            ? {
                ...board,
                lists: [...board.lists, action.payload.target],
              }
            : board
        ),
      }
    case BoardActionTypes.LIST_DELETE_DONE:
      return {
        ...state,
        boards: state.boards.map((board) =>
          board._id === action.payload.boardId
            ? {
                ...board,
                lists: board.lists.filter(
                  (l) => l._id !== action.payload.target
                ),
              }
            : board
        ),
      }
    case BoardActionTypes.LIST_CHANGE_DONE:
      return {
        ...state,
        boards: state.boards.map((board) =>
          board._id === action.payload.boardId
            ? {
                ...board,
                lists: board.lists.map((l) =>
                  l._id === action.payload.target._id
                    ? action.payload.target
                    : l
                ),
              }
            : board
        ),
      }
    default:
      return state
  }
}

export default boardReducer
