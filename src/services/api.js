import axios from "axios"

const API_URL = "http://localhost:3000/"

const axiosInstance = axios.create({
  baseURL: API_URL
})

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint)
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body)
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body)
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint)
  },
}
