import { TeamActions, TeamActionTypes } from "@/state/types/team.types"
import { ITeam } from "../../models/interfaces"

interface ITeamState {
  teams: ITeam[]
  loading: boolean
}

export const teamState: ITeamState = {
  teams: [],
  loading: false,
}

const teamReducer = (state = teamState, action: TeamActions) => {
  switch (action.type) {
    case TeamActionTypes.TEAM_GET_ALL_DONE:
      return {
        ...state,
        teams: action.payload.target,
      }
    case TeamActionTypes.TEAM_DELETE_DONE:
      return {
        ...state,
        teams: state.teams.filter((team) => team._id !== action.payload.target),
      }
    case TeamActionTypes.TEAM_CHANGE_DONE:
      return {
        ...state,
        teams: state.teams.map((team) =>
          team._id === action.payload.target._id ? action.payload.target : team
        ),
      }
    case TeamActionTypes.TEAM_CREATE_DONE:
      return { ...state, teams: [...state.teams, action.payload.target] }
    case TeamActionTypes.TEAM_ENDING:
      return {
        ...state,
        loading: false,
      }
    case TeamActionTypes.TEAM_LOADING:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default teamReducer
