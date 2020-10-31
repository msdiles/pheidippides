import {combineReducers} from "redux"
import authReducer, {authState} from "./auth.reducer"
import appReducer, {appState} from "./app.reducer"

export const initialState = {
  auth:authState,
  app:appState
}

export const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer
})

export type RootState = ReturnType<typeof rootReducer>
