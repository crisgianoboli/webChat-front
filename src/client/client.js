import axios from 'axios'
import { getStorageItems } from '../utils'

const client = axios.create({
  baseURL: process.env.API_BASE_URL || '/api',
})

client.interceptors.request.use(
  function (config) {
    const customData = getStorageItems()
    Object.assign(config.headers, customData)
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

client.interceptors.response.use(
  function (response) {
    return { ...response }
  },
  function (err) {
    if (err.response.status === 401) {
      localStorage.clear()
      window.location.reload()
    }
    return Promise.reject(err)
  }
)

export default client
