import axios from "axios";
const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api" });
api.interceptors.request.use(config => { const token = localStorage.getItem("heritage_token"); if (token) config.headers.Authorization = `Bearer ${token}`; return config; });
export const getError = error => error.response?.data?.message || error.message || "Something went wrong.";
export default api;
