import {
  AppActionsTypes,
  AppSetErrorPayload,
  AppSetMessagePayload
} from "../types/app.types"

export const appSetError = (payload: AppSetErrorPayload) => ({
  type: AppActionsTypes.APP_SET_ERROR,
  payload
})

export const appRemoveError = () => ({
  type: AppActionsTypes.APP_REMOVE_ERROR,
})

export const appSetMessage = (payload: AppSetMessagePayload) => ({
  type: AppActionsTypes.APP_SET_MESSAGE,
  payload
})

export const appRemoveMessage = () => ({
  type: AppActionsTypes.APP_REMOVE_MESSAGE,
})
