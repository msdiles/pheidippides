type URLMethod = "GET" | "PUT" | "POST" | "DELETE"

const http = async (
  url: string,
  method: URLMethod = "GET",
  data?: Object,
  headers?: { [key: string]: string }
) => {
  headers = { ...headers, "Content-type": "Application/json" }
  if (method === "GET") {
    try {
      return await fetch(process.env.NEXT_PUBLIC_API_URL + url + data, {
        method,
        credentials: "include",
        headers,
      })
    } catch (e) {
      throw new Error(e.message)
    }
  } else {
    try {
      return await fetch(process.env.NEXT_PUBLIC_API_URL + url, {
        method,
        credentials: "include",
        headers,
        body: JSON.stringify({ ...data }),
      })
    } catch (e) {
      throw new Error(e.message)
    }
  }
}

export default http
