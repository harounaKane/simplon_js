import axios from "axios";
import AuthService from "./AuthService";

const api = axios.create({
  baseURL: "http://localhost:4000", // port nodejs
});

api.interceptors.request.use((config) => {
  const token = AuthService.getToken();

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      AuthService.logout();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

export default api;
