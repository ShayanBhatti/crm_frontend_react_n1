import axios from "axios";
import { authStorage } from "../../features/auth/services/auth.storage";
import { loaderService } from "../loader/loader.service";
import { resolveApiAlert } from "../alerts/alert.resolver";
import { toastService } from "../toast/toast.service";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

// Request
api.interceptors.request.use((config) => {
  loaderService.start();

  const token = authStorage.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Response
api.interceptors.response.use(
  (response) => {
    loaderService.stop();

    const alert = resolveApiAlert(response.data);
    if (alert) {
      toastService[alert.type as keyof typeof toastService](alert.message);
    }

    return response;
  },
  (error) => {
    loaderService.stop();

    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong";

    toastService.error(message);
    return Promise.reject(error);
  }
);

export default api;
