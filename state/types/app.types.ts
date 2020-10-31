export enum AppActionsTypes {
  APP_SET_MESSAGE = "APP_SET_MESSAGE",
  APP_REMOVE_MESSAGE = "APP_REMOVE_MESSAGE",
  APP_SET_ERROR = "APP_SET_ERROR",
  APP_REMOVE_ERROR = "APP_REMOVE_ERROR"
}

//APP_SET_MESSAGE
export interface AppSetMessagePayload {
  message: string
}

export interface AppSetMessage {
  type:  AppActionsTypes.APP_SET_MESSAGE
  payload: AppSetMessagePayload
}

//

//APP_REMOVE_MESSAGE
export interface AppRemoveMessage {
  type:  AppActionsTypes.APP_REMOVE_MESSAGE
}

//

//APP_SET_ERROR
export interface AppSetErrorPayload {
  message: string
}

export interface AppSetError {
  type:  AppActionsTypes.APP_SET_ERROR
  payload: AppSetErrorPayload
}

//

//APP_REMOVE_ERROR
export interface AppRemoveError {
  type:  AppActionsTypes.APP_REMOVE_ERROR
}

//

export type AppActions = AppSetMessage | AppRemoveMessage | AppSetError | AppRemoveError
