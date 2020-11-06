import { combineReducers } from "redux"
import authReducer, { authState } from "./auth.reducer"
import appReducer, { appState } from "./app.reducer"
import teamReducer, { teamState } from "@/state/reducers/team.reducer"
import boardReducer, { boardState } from "@/state/reducers/board.reducer"

export const initialState = {
  auth: authState,
  app: appState,
  team: teamState,
  board: boardState,
}

export const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  team: teamReducer,
  board: boardReducer,
})

export type RootState = ReturnType<typeof rootReducer>
