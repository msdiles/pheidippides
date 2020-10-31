import {
  AuthActionsTypes,
  AuthActions
} from "../types/auth.types"

interface IAuth {
  loading: boolean
  isLoggedIn: boolean
  isStarted: boolean
  user: {
    userName: string
    userId: string
    userRole: string[]
    userToken: string
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
  }
}

const authReducer = (state = authState, action: AuthActions) => {
  switch (action.type) {
    case AuthActionsTypes.AUTH_LOADING:
      return {
        ...state, loading: true
      }
    case AuthActionsTypes.AUTH_ENDING:
      return {
        ...state, loading: false
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
        }
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
        }
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
        }
      }
    default:
      return state
  }
}

export default authReducer
