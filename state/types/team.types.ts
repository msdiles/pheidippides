import { Action } from "redux"
import { ITeam, ITeamCreated } from "../../models/interfaces"

export enum TeamActionTypes {
  TEAM_CREATE_START = "TEAM_CREATE_START",
  TEAM_CREATE_DONE = "TEAM_CREATE_DONE",
  TEAM_DELETE_START = "TEAM_DELETE_START",
  TEAM_DELETE_DONE = "TEAM_DELETE_DONE",
  TEAM_CHANGE_START = "TEAM_CHANGE_START",
  TEAM_CHANGE_DONE = "TEAM_CHANGE_DONE",
  TEAM_GET_START = "TEAM_GET_START",
  TEAM_GET_DONE = "TEAM_GET_DONE",
  TEAM_LOADING = "TEAM_LOADING",
  TEAM_ENDING = "TEAM_ENDING",
}

//TEAM_CREATE_START
export interface TeamCreateStartPayload {
  team: ITeamCreated
}

export interface TeamCreateStart extends Action {
  type: TeamActionTypes.TEAM_CREATE_START
  payload: TeamCreateStartPayload
}

//TEAM_CREATE_DONE
export interface TeamCreateDonePayload {
  success: boolean
  target: ITeam
}

export interface TeamCreateDone extends Action {
  type: TeamActionTypes.TEAM_CREATE_DONE
  payload: TeamCreateDonePayload
}

//TEAM_DELETE_START
export interface TeamDeleteStartPayload {
  id: string
}

export interface TeamDeleteStart extends Action {
  type: TeamActionTypes.TEAM_DELETE_START
  payload: TeamDeleteStartPayload
}

//TEAM_DELETE_DONE
export interface TeamDeleteDonePayload {
  success: boolean
  target: string
}

export interface TeamDeleteDone extends Action {
  type: TeamActionTypes.TEAM_DELETE_DONE
  payload: TeamDeleteDonePayload
}

//TEAM_CHANGE_START
export interface TeamChangeStartPayload {
  team: ITeam
}

export interface TeamChangeStart extends Action {
  type: TeamActionTypes.TEAM_CHANGE_START
  payload: TeamChangeStartPayload
}

//TEAM_CHANGE_DONE
export interface TeamChangeDonePayload {
  success: boolean
  target: ITeam
}

export interface TeamChangeDone extends Action {
  type: TeamActionTypes.TEAM_CHANGE_DONE
  payload: TeamChangeDonePayload
}

//TEAM_GET_START
export interface TeamGetStartPayload {
  id: string
}

export interface TeamGetStart extends Action {
  type: TeamActionTypes.TEAM_GET_START
  payload: TeamGetStartPayload
}

//TEAM_GET_DONE
export interface TeamGetDonePayload {
  success: boolean
  target: ITeam
}

export interface TeamGetDone extends Action {
  type: TeamActionTypes.TEAM_GET_DONE
  payload: TeamGetDonePayload
}

//TEAM_LOADING
export interface TeamLoading extends Action {
  type: TeamActionTypes.TEAM_LOADING
}

//TEAM_ENDING
export interface TeamEnding extends Action {
  type: TeamActionTypes.TEAM_ENDING
}

export type TeamActions =
  | TeamGetDone
  | TeamGetStart
  | TeamChangeDone
  | TeamChangeStart
  | TeamCreateDone
  | TeamCreateStart
  | TeamDeleteDone
  | TeamDeleteStart
  | TeamLoading
  | TeamEnding
