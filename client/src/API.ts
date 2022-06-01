import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"

export const getActivities = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/activities"
    )
    return todos
  } catch (error) {
    throw new Error("Get request error")
  }
}