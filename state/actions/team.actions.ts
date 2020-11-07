import {
  TeamActionTypes,
  TeamChangeDone,
  TeamChangeDonePayload,
  TeamChangeStart,
  TeamChangeStartPayload,
  TeamCreateDonePayload,
  TeamCreateStartPayload,
  TeamDeleteDonePayload,
  TeamDeleteStartPayload,
  TeamGetAllDonePayload,
  TeamGetAllStartPayload,
  TeamGetDone,
  TeamGetDonePayload,
  TeamGetStart,
  TeamGetStartPayload,
} from "@/state/types/team.types"
import { ThunkAction } from "redux-thunk"
import { RootState } from "@/state/reducers"
import { Action } from "redux"
import { AppActionsTypes } from "@/state/types/app.types"
import { appSetMessage } from "@/state/actions/app.actions"
import API from "@/utils/API"
import { authRefresh, authRefreshStart } from "@/state/actions/auth.actions"

export const teamGetStart = (
  payload: TeamGetStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<TeamActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(teamLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.getTeam(payload.id, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: teamGetStart, data: payload }))
      } else {
        dispatch(teamGetDone(result))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(teamEnding)
    }
  }
}

export const teamGetDone = (payload: TeamGetDonePayload) => ({
  type: TeamActionTypes.TEAM_GET_DONE,
  payload,
})

export const teamGetAllStart = (
  payload: TeamGetAllStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<TeamActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(teamLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.getAllTeam(payload.userId, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: teamGetAllStart, data: payload }))
      } else {
        dispatch(teamGetAllDone(result))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(teamEnding)
    }
  }
}

export const teamGetAllDone = (payload: TeamGetAllDonePayload) => ({
  type: TeamActionTypes.TEAM_GET_ALL_DONE,
  payload,
})

export const teamChangeStart = (
  payload: TeamChangeStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<TeamActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(teamLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.changeTeam(payload.team, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: teamChangeStart, data: payload }))
      } else {
        dispatch(teamChangeDone(result))
        dispatch(appSetMessage({ message: "Team changed", type: "info" }))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(teamEnding)
    }
  }
}

export const teamChangeDone = (payload: TeamChangeDonePayload) => ({
  type: TeamActionTypes.TEAM_CHANGE_DONE,
  payload,
})

export const teamDeleteStart = (
  payload: TeamDeleteStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<TeamActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(teamLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.deleteTeam(payload.id, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: teamDeleteStart, data: payload }))
      } else {
        dispatch(teamDeleteDone(result))
        dispatch(appSetMessage({ message: "Team deleted", type: "warning" }))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(teamEnding)
    }
  }
}

export const teamDeleteDone = (payload: TeamDeleteDonePayload) => ({
  type: TeamActionTypes.TEAM_DELETE_DONE,
  payload,
})

export const teamCreateStart = (
  payload: TeamCreateStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<TeamActionTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(teamLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.createTeam(payload.team, token)
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: teamCreateStart, data: payload }))
      } else {
        dispatch(teamCreateDone(result))
        dispatch(appSetMessage({ message: "Team created", type: "success" }))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(teamEnding)
    }
  }
}

export const teamCreateDone = (payload: TeamCreateDonePayload) => ({
  type: TeamActionTypes.TEAM_CREATE_DONE,
  payload,
})

export const teamLoading = () => ({
  type: TeamActionTypes.TEAM_LOADING,
})

export const teamEnding = () => ({
  type: TeamActionTypes.TEAM_ENDING,
})
