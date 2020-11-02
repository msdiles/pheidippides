import {
  AppActionsTypes,
  AppSetMessagePayload
} from "../types/app.types"

export const appSetMessage = (payload: AppSetMessagePayload) => ({
  type: AppActionsTypes.APP_SET_MESSAGE,
  payload
})

export const appRemoveMessage = () => ({
  type: AppActionsTypes.APP_REMOVE_MESSAGE,
})
