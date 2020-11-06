import { TeamActions } from "@/state/types/team.types"
import { ITeam } from "../../models/interfaces"

interface ITeamState {
  teams: ITeam[]
}

export const teamState: ITeamState = {
  teams: [],
}

const teamReducer = (state = teamState, action: TeamActions) => {
  switch (action.type) {
    default:
      return state
  }
}

export default teamReducer
