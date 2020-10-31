import http from "@/utils/http"

class API {
  static handleRequest=async (response:Response)=>{
    const status = response.status
    const result = await  response.json()
    return {status,result}
  }

  static async signin(email: string, password: string, fingerprint: string) {
    const response = await http("auth/signin", "POST", {data: {email, password, fingerprint}})
    return await this.handleRequest(response)
  }

  static async signup(email: string, username: string, password: string) {
    const response = await http("auth/signup", "POST", {data: {email, username, password}})
    return await this.handleRequest(response)
  }

  static async logout(token: string) {
    const response = await http("auth/logout", "POST", {data: {token}})
    return await this.handleRequest(response)
  }

  static async checkEmail(email: string) {
    const response = await http("auth/email-check", "POST", {data: {email}})
    return await this.handleRequest(response)
  }

  static async refresh(token: string, fingerprint: string) {
    const response = await http("auth/refresh", "POST", {data: {token, fingerprint}})
    return await this.handleRequest(response)
  }

  static async resetLink(email: string) {
    const response = await http("auth/reset/get", "POST", {data: {email}})
    return await this.handleRequest(response)
  }

  static async resetCheckQuery(resetId: string, resetDate: string) {
    const response = await http("auth/reset/check", "POST", {data: {resetId, resetDate}})
    return await this.handleRequest(response)
  }

  static async resetPassword(resetId: string, resetDate: string, password: string) {
    const response = await http("auth/reset/password", "POST", {data: {resetId, resetDate, password}})
    return await this.handleRequest(response)
  }
}

export default API
