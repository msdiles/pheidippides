import {
  AuthActionsTypes,
  AuthLoginDonePayload,
  AuthLoginStartPayload, AuthRefreshDonePayload, AuthRefreshStartPayload
} from "../types/auth.types"
import {Action, Dispatch} from "redux"
import API from "@/utils/API"
import {appSetError, appSetMessage} from "@/state/actions/app.actions"
import {ThunkAction} from "redux-thunk"
import {RootState} from "@/state/reducers"
import {AppActionsTypes} from "@/state/types/app.types"
import Router from "next/router"


export const authLoginDone = (payload: AuthLoginDonePayload) => ({
  type: AuthActionsTypes.AUTH_LOGIN_DONE,
  payload
})


export const authLoginStart = (payload: AuthLoginStartPayload): ThunkAction<void, RootState, unknown, Action<AuthActionsTypes | AppActionsTypes>> => {
  return async (dispatch) => {
    try {
      await dispatch(authLoading())
      const {result, status} = await API.signin(payload.email, payload.password, payload.fingerprint)
      if (status > 200) {
        throw new Error(result.message)
      }
      await dispatch(authLoginDone({user: result.user, accessToken: result.accessToken}))
      await Router.push("/")
    } catch (e) {
      await dispatch(appSetError(e.message))
    } finally {
      await dispatch(authEnding())
    }


  }

}

export const authLogoutDone = () => ({
  type: AuthActionsTypes.AUTH_LOGOUT_DONE,
})

export const authLogoutStart = (): ThunkAction<void, RootState, unknown, Action<AuthActionsTypes | AppActionsTypes>> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(authLoading())
      const {result,status} =await API.logout(getState().auth.user.userToken)
      if(status>200){
        throw new Error("Something went wrong")
      }
      await dispatch(authLogoutDone())
      await Router.push("/")
    } catch (e) {
      await dispatch(appSetError(e.message))
    } finally {
      await dispatch(authEnding())

    }
  }
}



export const authRefreshDone = (payload: AuthRefreshDonePayload) => ({
  type: AuthActionsTypes.AUTH_REFRESH_DONE,
  payload
})



export const authRefreshStart = (payload: AuthRefreshStartPayload): ThunkAction<void, RootState, unknown, Action<AuthActionsTypes | AppActionsTypes>> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(authLoading())
      const {result,status}=await API.refresh(getState().auth.user.userToken,"fingerprint")
      if(status> 200){
        await dispatch(appSetMessage({message:"Your session expired"}))
        await dispatch(authLogoutDone())
        await Router.push("/home")
      }
    } catch (e) {
      await dispatch(appSetError(e.message))
    } finally {
      await dispatch(authEnding())

    }
  }
}
export const authLoading = () => ({
  type: AuthActionsTypes.AUTH_LOADING,
})


export const authEnding = () => ({
  type: AuthActionsTypes.AUTH_ENDING,
})
