import axios from "axios";

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AXIOS_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
})

export const APIWITHTOKEN = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AXIOS_BASE_URL,
  headers: {
    "Authorization": localStorage.getItem('token')
  }
})
