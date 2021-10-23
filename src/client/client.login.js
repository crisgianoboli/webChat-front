import axios from 'axios'

const clientLogin = axios.create({
  baseURL: process.env.API_BASE_URL || '/api',
})

export default clientLogin
