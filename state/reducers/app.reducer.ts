import { AppActions, AppActionsTypes } from "../types/app.types"
import { MessageContent } from "@/models/types"
import { color } from "@/utils/colors"

interface IApp {
  message: {
    type: MessageContent
    content: string
  }
  boardColor: {
    backgroundColor: color | string
    NavbarColor: color | string
  }
}

export const appState: IApp = {
  message: {
    type: undefined,
    content: "",
  },
  boardColor: {
    backgroundColor: "white",
    NavbarColor: "white",
  },
}

const appReducer = (state = appState, action: AppActions) => {
  switch (action.type) {
    case AppActionsTypes.APP_SET_MESSAGE:
      return {
        ...state,
        message: {
          content: action.payload.message || "",
          type: action.payload.type || undefined,
        },
      }
    case AppActionsTypes.APP_REMOVE_MESSAGE:
      return {
        ...state,
        message: { content: "", type: undefined },
      }
    case AppActionsTypes.APP_SET_COLOR:
      return {
        ...state,
        boardColor: {
          backgroundColor: action.payload.boardColor.backgroundColor,
          NavbarColor: action.payload.boardColor.NavbarColor,
        },
      }
    default:
      return state
  }
}

export default appReducer
