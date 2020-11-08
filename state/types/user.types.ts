import { Action } from "redux"

export enum UserActionsTypes {
  USER_SET_FAVORITE_START = "USER_SET_FAVORITE_START",
  USER_SET_FAVORITE_DONE = "USER_SET_FAVORITE_DONE",
  USER_LOADING = "USER_LOADING",
  USER_ENDING = "USER_ENDING",
}

//USER_SET_FAVORITE_START
export interface UserSetFavoriteStartPayload {
  userId: string
  favorite: string[]
}

export interface UserSetFavoriteStart {
  type: UserActionsTypes.USER_SET_FAVORITE_START
  payload: UserSetFavoriteStartPayload
}

//

//USER_SET_FAVORITE_DONE
export interface UserSetFavoriteDonePayload {
  target: string[]
}

export interface UserSetFavoriteDone {
  type: UserActionsTypes.USER_SET_FAVORITE_DONE
  payload: UserSetFavoriteDonePayload
}

//

//USER_LOADING
export interface UserLoading extends Action {
  type: UserActionsTypes.USER_LOADING
}

//USER_ENDING
export interface UserEnding extends Action {
  type: UserActionsTypes.USER_ENDING
}

export type UserActions =
  | UserSetFavoriteStart
  | UserSetFavoriteDone
  | UserLoading
  | UserEnding
