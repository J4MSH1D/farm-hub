import axios from "axios";
import router from "@/router";
import { message } from "ant-design-vue";
import storage from "@/utils/storageService";

const baseURL = import.meta.env.VITE_BASE_URL;

// {
//   "email": "admin@gmail.com",
//   "password": "123"
// }

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "ngrok-skip-browser-warning": "69420",
  },
});

api.interceptors.request.use(
  config => {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    console.log(error?.response);
    if (error?.response?.data?.error) {
      message.error(error?.response?.data?.error);
      console.log(error?.response?.data?.error);
    }

    if (error?.response?.status === 401) {
      storage.logOut();
      router.push("/auth/login");
    }
    return Promise.reject(error);
  }
);

export default api;
