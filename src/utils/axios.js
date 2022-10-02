import axios from "axios"
import { clearStore } from "../features/user/userSlice"
import { getUserFromLocalStorage } from "./localStorage"

const customFetch = axios.create({
  baseURL: "https://ciampelletti-jobs-api.herokuapp.com/api/v1",
  // baseURL: "http://localhost:8000/api/v1",
})

customFetch.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage()
  if (user) {
    config.headers.common["Authorization"] = `Bearer ${user.token}`
  }
  return config
})

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore())
    return thunkAPI.rejectWithValue("Sorry! Unauthorized! Logging Out...")
  }
  return thunkAPI.rejectWithValue(error.response.data.msg)
}

export default customFetch
