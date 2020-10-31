import {Action, AnyAction} from "redux"

export enum AuthActionsTypes {
  AUTH_LOADING = "AUTH_LOADING",
  AUTH_ENDING = "AUTH_ENDING",
  AUTH_LOGIN_START = "AUTH_LOGIN_START",
  AUTH_LOGIN_DONE = "AUTH_LOGIN_DONE",
  AUTH_LOGOUT_START = "AUTH_LOGOUT_START",
  AUTH_LOGOUT_DONE = "AUTH_LOGOUT_DONE",
  AUTH_REFRESH_START = "AUTH_REFRESH_START",
  AUTH_REFRESH_DONE = "AUTH_REFRESH_DONE"
}


//AUTH_LOGIN_START
export interface AuthLoginStartPayload {
  email: string
  password: string
  fingerprint:string
}

export interface AuthLoginStart extends Action {
  type:  AuthActionsTypes.AUTH_LOGIN_START
  payload: AuthLoginStartPayload
}

//

//AUTH_LOGIN_DONE
export interface AuthLoginDonePayload {
  user: {
    id: string
    name: string
    role: string[]
  }
  accessToken: string
}

export interface AuthLoginDone extends Action {
  type:  AuthActionsTypes.AUTH_LOGIN_DONE
  payload: AuthLoginDonePayload
}

//

//AUTH_LOGOUT_START
export interface AuthLogoutStart extends Action {
  type: AuthActionsTypes.AUTH_LOGOUT_START
}

//

//AUTH_LOGOUT_DONE
export interface AuthLogoutDone extends Action {
  type:  AuthActionsTypes.AUTH_LOGOUT_DONE
}

//

//AUTH_REFRESH_START
export interface AuthRefreshStartPayload {
  action: any
  data: any
}

export interface AuthRefreshStart extends Action {
  type:  AuthActionsTypes.AUTH_REFRESH_START
  payload?: AuthRefreshStartPayload
}

//AUTH_REFRESH_DONE
export interface AuthRefreshDonePayload {
  user: {
    id: string
    name: string
    role: string[]
  }
  accessToken: string
}

export interface AuthRefreshDone extends Action {
  type:  AuthActionsTypes.AUTH_REFRESH_DONE
  payload: AuthRefreshDonePayload
}

//

//AUTH_LOADING
export interface AuthLoading extends Action {
  type:  AuthActionsTypes.AUTH_LOADING
}

//

//AUTH_ENDING
export interface AuthEnding extends Action {
  type:  AuthActionsTypes.AUTH_ENDING
}

//

export type AuthActions =
  AuthLoginStart
  | AuthLoginDone
  | AuthLogoutStart
  | AuthLogoutDone
  | AuthRefreshStart
  | AuthRefreshDone
  | AuthLoading
  | AuthEnding
