import axios from "axios";
import { getToken } from "../storage/user.storage.js";

const client = axios.create({ baseURL: process.env.REACT_APP_API_URL });

client.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
});

export default client;
