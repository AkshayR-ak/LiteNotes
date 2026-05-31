import axios from "axios";

const api = axios.create({
  baseURL: "https://litenotes-backend.onrender.com/api",
});

export default api;