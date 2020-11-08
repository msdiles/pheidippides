import http from "@/utils/http"
import {
  IBoardCreated,
  ICardCreated,
  IListCreated,
  ITeam,
  ITeamCreated,
} from "@/models/interfaces"

class API {
  static handleRequest = async (response: Response) => {
    const status = response.status
    const result = await response.json()
    return { status, result }
  }

  static async signin(email: string, password: string, fingerprint: string) {
    const response = await http("auth/signin", "POST", {
      data: { email, password, fingerprint },
    })
    return await this.handleRequest(response)
  }

  static async signup(email: string, username: string, password: string) {
    const response = await http("auth/signup", "POST", {
      data: { email, username, password },
    })
    return await this.handleRequest(response)
  }

  static async logout(token: string) {
    const response = await http("auth/logout", "POST", { data: { token } })
    return await this.handleRequest(response)
  }

  static async checkEmail(email: string) {
    const response = await http("auth/email-check", "POST", { data: { email } })
    return await this.handleRequest(response)
  }

  static async refresh(fingerprint: string) {
    const response = await http("auth/refresh", "POST", {
      data: { fingerprint },
    })
    return await this.handleRequest(response)
  }

  static async resetLink(email: string) {
    const response = await http("auth/reset/get", "POST", { data: { email } })
    return await this.handleRequest(response)
  }

  static async resetCheckQuery(resetId: string, resetDate: string) {
    const response = await http("auth/reset/check", "POST", {
      data: { resetId, resetDate },
    })
    return await this.handleRequest(response)
  }

  static async resetPassword(
    resetId: string,
    resetDate: string,
    password: string
  ) {
    const response = await http("auth/reset/password", "POST", {
      data: { resetId, resetDate, password },
    })
    return await this.handleRequest(response)
  }

  //Team
  static async getTeam(id: string, token: string) {
    const response = await http(
      "team/get",
      "POST",
      {
        data: { id },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  static async getAllTeam(id: string, token: string) {
    const response = await http(
      "team/all",
      "POST",
      {
        data: { userId: id },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  static async deleteTeam(id: string, token: string) {
    const response = await http(
      "team/delete",
      "POST",
      {
        data: { id },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  static async changeTeam(team: ITeam, token: string) {
    const response = await http(
      "team/change",
      "POST",
      {
        data: { team },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  static async createTeam(team: ITeamCreated, token: string) {
    const response = await http(
      "team/create",
      "POST",
      {
        data: { team },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  //Board

  static async getBoard(id: string, token: string) {
    const response = await http(
      "board/get",
      "POST",
      {
        data: { id },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  static async getAllBoards(userId: string, token: string) {
    const response = await http(
      "board/all",
      "POST",
      {
        data: { userId },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  static async deleteBoard(id: string, token: string) {
    const response = await http(
      "board/delete",
      "POST",
      {
        data: { id },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  static async changeBoard(board: IBoardCreated, token: string) {
    const response = await http(
      "board/change",
      "POST",
      {
        data: { board },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  static async createBoard(board: IBoardCreated, token: string) {
    const response = await http(
      "board/create",
      "POST",
      {
        data: { board },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  //List
  static async getList(id: string, token: string) {
    const response = await http(
      "list/get",
      "POST",
      {
        data: { id },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  static async deleteList(id: string, token: string) {
    const response = await http(
      "list/delete",
      "POST",
      {
        data: { id },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  static async changeList(list: IListCreated, token: string) {
    const response = await http(
      "list/change",
      "POST",
      {
        data: { list },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  static async createList(list: IListCreated, token: string) {
    const response = await http(
      "list/create",
      "POST",
      {
        data: { list },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  //Card

  static async getCard(id: string, token: string) {
    const response = await http(
      "card/get",
      "POST",
      {
        data: { id },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  static async deleteCard(id: string, token: string) {
    const response = await http(
      "card/delete",
      "POST",
      {
        data: { id },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  static async changeCard(card: ICardCreated, token: string) {
    const response = await http(
      "card/change",
      "POST",
      {
        data: { card },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  static async createCard(card: ICardCreated, token: string) {
    const response = await http(
      "card/create",
      "POST",
      {
        data: { card },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }

  //User

  static async setFavorite(userId: string, favorite: string[], token: string) {
    const response = await http(
      "user/favorite",
      "POST",
      {
        data: { userId, favorite },
      },
      { Authorization: `bearer ${token}` }
    )
    return await this.handleRequest(response)
  }
}

export default API
