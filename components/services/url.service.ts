import axios from "axios";

const ApiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const axiosInstance = axios.create({
  baseURL: ApiUrl,
  withCredentials: true, // 🔥 cookies auto send
});

let isRefreshing = false;
let refreshQueue: Array<() => void> = [];

// helper
const runQueue = () => {
  refreshQueue.forEach((cb) => cb());
  refreshQueue = [];
};

// REQUEST INTERCEPTOR → add Authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE INTERCEPTOR → refresh token logic
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status !== 401 ||
      originalRequest._retry ||
      originalRequest.url?.includes("/auth/login") ||
      originalRequest.url?.includes("/auth/register") ||
      originalRequest.url?.includes("/auth/refresh-token")
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    if (!isRefreshing) {
      isRefreshing = true;
      try {
        // 🔁 refresh token
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
          window.location.href = "/login";
          return Promise.reject(error);
        }

        const response = await axiosInstance.post("/api/auth/refresh-token", {
          refreshToken,
        });

        if (response.data?.data?.token) {
          localStorage.setItem("accessToken", response.data.data.token);
          axiosInstance.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${response.data.data.token}`;
        }

        isRefreshing = false;
        runQueue();
        return axiosInstance(originalRequest);
      } catch (err) {
        isRefreshing = false;
        refreshQueue = [];
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    // agar already refresh ho raha hai → queue
    return new Promise((resolve) => {
      refreshQueue.push(() => resolve(axiosInstance(originalRequest)));
    });
  }
);

export default axiosInstance;
