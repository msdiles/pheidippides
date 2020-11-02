import {AppActionsTypes, AppActions} from "../types/app.types"
import {MessageContent} from "../../models/types"

interface IApp {
  message: {
    type: MessageContent
    content: ""
  }
}

export const appState: IApp = {
  message: {
    type: undefined,
    content: ""
  }
}

const appReducer = (state = appState, action: AppActions) => {
  switch (action.type) {
    case AppActionsTypes.APP_SET_MESSAGE:
      return {
        ...state, message: {content: action.payload.message || "", type: action.payload.type}
      }
    case AppActionsTypes.APP_REMOVE_MESSAGE:
      return {
        ...state, message: {content: "", type: undefined}
      }
    default:
      return state
  }
}

export default appReducer
