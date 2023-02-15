import axios from 'axios'

export const apiFetcher = axios.create({
  baseURL: process.env.FMP_URL,
  params: {
    apikey: process.env.FMP_API_KEY,
  },
})
