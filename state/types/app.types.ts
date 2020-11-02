import {MessageContent} from "../../models/types"

export enum AppActionsTypes {
  APP_SET_MESSAGE = "APP_SET_MESSAGE",
  APP_REMOVE_MESSAGE = "APP_REMOVE_MESSAGE",
}

//APP_SET_MESSAGE
export interface AppSetMessagePayload {
  message: string
  type: MessageContent
}

export interface AppSetMessage {
  type: AppActionsTypes.APP_SET_MESSAGE
  payload: AppSetMessagePayload
}

//

//APP_REMOVE_MESSAGE
export interface AppRemoveMessage {
  type: AppActionsTypes.APP_REMOVE_MESSAGE
}

//


export type AppActions = AppSetMessage | AppRemoveMessage
