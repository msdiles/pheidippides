import {AppActionsTypes, AppActions} from "../types/app.types"

interface IApp {
  message: string
  error: string
}

export const appState: IApp = {
  message: "",
  error: ""
}

const appReducer = (state = appState, action: AppActions) => {
  switch (action.type) {
    case AppActionsTypes.APP_SET_MESSAGE:
      return {
        ...state, message: action.payload.message
      }
    case AppActionsTypes.APP_REMOVE_MESSAGE:
      return {
        ...state, message: ""
      }
    case AppActionsTypes.APP_SET_ERROR:
      return {
        ...state, error: action.payload.message
      }
    case AppActionsTypes.APP_REMOVE_ERROR:
      return {
        ...state, error: ""
      }
    default:
      return state
  }
}

export default appReducer
