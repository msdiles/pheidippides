import { AuthActions, AuthActionsTypes } from "../types/auth.types"
import { UserActions, UserActionsTypes } from "@/state/types/user.types"

interface IAuth {
  loading: boolean
  isLoggedIn: boolean
  isStarted: boolean
  user: {
    userName: string
    userId: string
    userRole: string[]
    userToken: string
    userEmail: string
    favoriteBoards: string[]
  }
}

export const authState: IAuth = {
  loading: false,
  isLoggedIn: false,
  isStarted: false,
  user: {
    userName: "",
    userId: "",
    userRole: [],
    userToken: "",
    userEmail: "",
    favoriteBoards: [],
  },
}

const authReducer = (state = authState, action: AuthActions | UserActions) => {
  switch (action.type) {
    case UserActionsTypes.USER_LOADING:
    case AuthActionsTypes.AUTH_LOADING:
      return {
        ...state,
        loading: true,
      }
    case UserActionsTypes.USER_ENDING:
    case AuthActionsTypes.AUTH_ENDING:
      return {
        ...state,
        loading: false,
      }
    case UserActionsTypes.USER_SET_FAVORITE_DONE:
      return {
        ...state,
        user: { ...state.user, favoriteBoards: action.payload.target },
      }
    case AuthActionsTypes.AUTH_LOGOUT_DONE:
      return {
        ...state,
        isLoggedIn: false,
        user: {
          userName: "",
          userId: "",
          userRole: [],
          userToken: "",
          userEmail: "",
          favoriteBoards: [],
        },
      }
    case AuthActionsTypes.AUTH_REFRESH_START:
      return {
        ...state,
        isStarted: true,
      }
    case AuthActionsTypes.AUTH_LOGIN_DONE:
      return {
        ...state,
        isLoggedIn: true,
        user: {
          userName: action.payload.user.name,
          userId: action.payload.user.id,
          userRole: action.payload.user.role,
          userToken: action.payload.accessToken,
          userEmail: action.payload.user.email,
          favoriteBoards: action.payload.user.favoriteBoards,
        },
      }
    case AuthActionsTypes.AUTH_REFRESH_DONE:
      return {
        ...state,
        isLoggedIn: true,
        user: {
          userName: action.payload.user.name,
          userId: action.payload.user.id,
          userRole: action.payload.user.role,
          userToken: action.payload.accessToken,
          userEmail: action.payload.user.email,
          favoriteBoards: action.payload.user.favoriteBoards,
        },
      }
    default:
      return state
  }
}

export default authReducer
