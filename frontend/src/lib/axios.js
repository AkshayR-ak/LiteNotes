import axios from "axios";

const BASE_URL = process.env.NODE_ENV === "production"
  ? process.env.REACT_APP_API_URL
  : "https://litenotes-backend.onrender.com/";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;