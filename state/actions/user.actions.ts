import { ThunkAction } from "redux-thunk"
import { RootState } from "@/state/reducers"
import { Action } from "redux"
import { AppActionsTypes } from "@/state/types/app.types"
import API from "@/utils/API"
import { authRefresh } from "@/state/actions/auth.actions"
import { appSetMessage } from "@/state/actions/app.actions"
import {
  UserActionsTypes,
  UserSetFavoriteDone,
  UserSetFavoriteStartPayload,
} from "@/state/types/user.types"

export const userSetFavoriteStart = (
  payload: UserSetFavoriteStartPayload
): ThunkAction<
  void,
  RootState,
  unknown,
  Action<UserActionsTypes | AppActionsTypes>
> => {
  return async (dispatch, getState) => {
    try {
      await dispatch(userLoading)
      const token = getState().auth.user.userToken
      const { result, status } = await API.setFavorite(
        payload.userId,
        payload.favorite,
        token
      )
      if (status > 200 && status !== 401) {
        throw new Error(result.message)
      } else if (status === 401) {
        dispatch(authRefresh({ action: userSetFavoriteStart, data: payload }))
      } else {
        dispatch(userSetFavoriteDone(result))
      }
    } catch (e) {
      await dispatch(appSetMessage({ message: e.message, type: "error" }))
    } finally {
      await dispatch(userEnding)
    }
  }
}

export const userSetFavoriteDone = (payload: UserSetFavoriteDone) => ({
  type: UserActionsTypes.USER_SET_FAVORITE_DONE,
  payload,
})

export const userLoading = () => ({
  type: UserActionsTypes.USER_LOADING,
})

export const userEnding = () => ({
  type: UserActionsTypes.USER_ENDING,
})
