import {
  IBoard,
  IBoardCreated,
  IList,
  IListCreated,
  ICard,
  ICardCreated,
} from "@/models/interfaces"
import { Action } from "redux"

export enum BoardActionTypes {
  BOARD_GET_ALL_START = "BOARD_GET_ALL_START",
  BOARD_GET_ALL_DONE = "BOARD_GET_ALL_DONE",
  BOARD_CREATE_START = "BOARD_CREATE_START",
  BOARD_CREATE_DONE = "BOARD_CREATE_DONE",
  BOARD_DELETE_START = "BOARD_DELETE_START",
  BOARD_DELETE_DONE = "BOARD_DELETE_DONE",
  BOARD_CHANGE_START = "BOARD_CHANGE_START",
  BOARD_CHANGE_DONE = "BOARD_CHANGE_DONE",
  BOARD_GET_START = "BOARD_GET_START",
  BOARD_GET_DONE = "BOARD_GET_DONE",
  BOARD_LOADING = "BOARD_LOADING",
  BOARD_ENDING = "BOARD_ENDING",
  LIST_CREATE_START = "LIST_CREATE_START",
  LIST_CREATE_DONE = "LIST_CREATE_DONE",
  LIST_DELETE_START = "LIST_DELETE_START",
  LIST_DELETE_DONE = "LIST_DELETE_DONE",
  LIST_CHANGE_START = "LIST_CHANGE_START",
  LIST_CHANGE_DONE = "LIST_CHANGE_DONE",
  LIST_GET_START = "LIST_GET_START",
  LIST_GET_DONE = "LIST_GET_DONE",
  CARD_CREATE_START = "CARD_CREATE_START",
  CARD_CREATE_DONE = "CARD_CREATE_DONE",
  CARD_DELETE_START = "CARD_DELETE_START",
  CARD_DELETE_DONE = "CARD_DELETE_DONE",
  CARD_CHANGE_START = "CARD_CHANGE_START",
  CARD_CHANGE_DONE = "CARD_CHANGE_DONE",
  CARD_GET_START = "CARD_GET_START",
  CARD_GET_DONE = "CARD_GET_DONE",
}
//BOARD_GET_ALL_START
export interface BoardGetAllStartPayload {
  userId: string
}

export interface BoardGetAllStart extends Action {
  type: BoardActionTypes.BOARD_GET_ALL_START
  payload: BoardGetAllStartPayload
}

//BOARD_GET_ALL_DONE
export interface BoardGetAllDonePayload {
  target: IBoard[]
}

export interface BoardGetAllDone extends Action {
  type: BoardActionTypes.BOARD_GET_ALL_DONE
  payload: BoardGetAllDonePayload
}

//BOARD_CREATE_START
export interface BoardCreateStartPayload {
  board: IBoardCreated
}

export interface BoardCreateStart extends Action {
  type: BoardActionTypes.BOARD_CREATE_START
  payload: BoardCreateStartPayload
}

//BOARD_CREATE_DONE
export interface BoardCreateDonePayload {
  success: boolean
  target: IBoard
}

export interface BoardCreateDone extends Action {
  type: BoardActionTypes.BOARD_CREATE_DONE
  payload: BoardCreateDonePayload
}

//BOARD_DELETE_START
export interface BoardDeleteStartPayload {
  id: string
}

export interface BoardDeleteStart extends Action {
  type: BoardActionTypes.BOARD_DELETE_START
  payload: BoardDeleteStartPayload
}

//BOARD_DELETE_DONE
export interface BoardDeleteDonePayload {
  success: boolean
  target: string
}

export interface BoardDeleteDone extends Action {
  type: BoardActionTypes.BOARD_DELETE_DONE
  payload: BoardDeleteDonePayload
}

//BOARD_CHANGE_START
export interface BoardChangeStartPayload {
  board: IBoard
}

export interface BoardChangeStart extends Action {
  type: BoardActionTypes.BOARD_CHANGE_START
  payload: BoardChangeStartPayload
}

//BOARD_CHANGE_DONE
export interface BoardChangeDonePayload {
  success: boolean
  target: IBoard
}

export interface BoardChangeDone extends Action {
  type: BoardActionTypes.BOARD_CHANGE_DONE
  payload: BoardChangeDonePayload
}

//BOARD_GET_START
export interface BoardGetStartPayload {
  id: string
}

export interface BoardGetStart extends Action {
  type: BoardActionTypes.BOARD_GET_START
  payload: BoardGetStartPayload
}

//BOARD_GET_DONE
export interface BoardGetDonePayload {
  success: boolean
  target: IBoard
}

export interface BoardGetDone extends Action {
  type: BoardActionTypes.BOARD_GET_DONE
  payload: BoardGetDonePayload
}

//BOARD_LOADING
export interface BoardLoading extends Action {
  type: BoardActionTypes.BOARD_LOADING
}

//BOARD_ENDING
export interface BoardEnding extends Action {
  type: BoardActionTypes.BOARD_ENDING
}

//LIST_CREATE_START
export interface ListCreateStartPayload {
  boardId: string
  list: IListCreated
}

export interface ListCreateStart extends Action {
  type: BoardActionTypes.LIST_CREATE_START
  payload: ListCreateStartPayload
}

//LIST_CREATE_DONE
export interface ListCreateDonePayload {
  success: boolean
  target: IList
  boardId: string
}

export interface ListCreateDone extends Action {
  type: BoardActionTypes.LIST_CREATE_DONE
  payload: ListCreateDonePayload
}

//LIST_DELETE_START
export interface ListDeleteStartPayload {
  boardId: string
  listId: string
}

export interface ListDeleteStart extends Action {
  type: BoardActionTypes.LIST_DELETE_START
  payload: ListDeleteStartPayload
}

//LIST_DELETE_DONE
export interface ListDeleteDonePayload {
  success: boolean
  target: string
  boardId: string
}

export interface ListDeleteDone extends Action {
  type: BoardActionTypes.LIST_DELETE_DONE
  payload: ListDeleteDonePayload
}

//LIST_CHANGE_START
export interface ListChangeStartPayload {
  boardId: string
  list: IList
}

export interface ListChangeStart extends Action {
  type: BoardActionTypes.LIST_CHANGE_START
  payload: ListChangeStartPayload
}

//LIST_CHANGE_DONE
export interface ListChangeDonePayload {
  success: boolean
  target: IList
  boardId: string
}

export interface ListChangeDone extends Action {
  type: BoardActionTypes.LIST_CHANGE_DONE
  payload: ListChangeDonePayload
}

//LIST_GET_START
export interface ListGetStartPayload {
  boardId: string
  listId: string
}

export interface ListGetStart extends Action {
  type: BoardActionTypes.LIST_GET_START
  payload: ListGetStartPayload
}

//LIST_GET_DONE
export interface ListGetDonePayload {
  success: boolean
  target: IList
}

export interface ListGetDone extends Action {
  type: BoardActionTypes.LIST_GET_DONE
  payload: ListGetDonePayload
}

//CARD_CREATE_START
export interface CardCreateStartPayload {
  boardId: string
  card: ICardCreated
}

export interface CardCreateStart extends Action {
  type: BoardActionTypes.CARD_CREATE_START
  payload: CardCreateStartPayload
}

//CARD_CREATE_DONE
export interface CardCreateDonePayload {
  success: boolean
  target: ICard
}

export interface CardCreateDone extends Action {
  type: BoardActionTypes.CARD_CREATE_DONE
  payload: CardCreateDonePayload
}

//CARD_DELETE_START
export interface CardDeleteStartPayload {
  boardId: string
  cardId: string
}

export interface CardDeleteStart extends Action {
  type: BoardActionTypes.CARD_DELETE_START
  payload: CardDeleteStartPayload
}

//CARD_DELETE_DONE
export interface CardDeleteDonePayload {
  success: boolean
  target: string
}

export interface CardDeleteDone extends Action {
  type: BoardActionTypes.CARD_DELETE_DONE
  payload: CardDeleteDonePayload
}

//CARD_CHANGE_START
export interface CardChangeStartPayload {
  boardId: string
  card: ICard
}

export interface CardChangeStart extends Action {
  type: BoardActionTypes.CARD_CHANGE_START
  payload: CardChangeStartPayload
}

//CARD_CHANGE_DONE
export interface CardChangeDonePayload {
  success: boolean
  target: ICard
}

export interface CardChangeDone extends Action {
  type: BoardActionTypes.CARD_CHANGE_DONE
  payload: CardChangeDonePayload
}

//CARD_GET_START
export interface CardGetStartPayload {
  boardId: string
  cardId: string
}

export interface CardGetStart extends Action {
  type: BoardActionTypes.CARD_GET_START
  payload: CardGetStartPayload
}

//CARD_GET_DONE
export interface CardGetDonePayload {
  success: boolean
  target: ICard
}

export interface CardGetDone extends Action {
  type: BoardActionTypes.CARD_GET_DONE
  payload: CardGetDonePayload
}

export type BoardActions =
  | BoardGetAllStart
  | BoardGetAllDone
  | BoardGetDone
  | BoardGetStart
  | BoardChangeDone
  | BoardChangeStart
  | BoardCreateDone
  | BoardCreateStart
  | BoardDeleteDone
  | BoardDeleteStart
  | ListGetDone
  | ListGetStart
  | ListChangeDone
  | ListChangeStart
  | ListCreateDone
  | ListCreateStart
  | ListDeleteDone
  | ListDeleteStart
  | CardGetDone
  | CardGetStart
  | CardChangeDone
  | CardChangeStart
  | CardCreateDone
  | CardCreateStart
  | CardDeleteDone
  | CardDeleteStart
  | BoardLoading
  | BoardEnding
