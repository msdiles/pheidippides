import { MessageContent } from "@/models/types"
import { color } from "@/utils/colors"

export enum AppActionsTypes {
  APP_SET_MESSAGE = "APP_SET_MESSAGE",
  APP_REMOVE_MESSAGE = "APP_REMOVE_MESSAGE",
  APP_SET_COLOR = "APP_SET_COLOR",
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

//APP_SET_COLOR
export interface AppSetColorPayload {
  boardColor: {
    backgroundColor: color | string
    NavbarColor: color | string
  }
}

export interface AppSetColor {
  type: AppActionsTypes.APP_SET_COLOR
  payload: AppSetColorPayload
}

export type AppActions = AppSetMessage | AppRemoveMessage | AppSetColor
