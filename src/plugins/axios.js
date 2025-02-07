import axios from "axios";
import router from "@/router";
import { message } from "ant-design-vue";

const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL,
  withCredentials: true,
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
    if (error?.response?.data?.error) {
      message.error(error?.response?.data?.error);
      console.log(error?.response?.data?.error);
    }

    if (error?.response?.status === 401) {
      router.push("/auth/login");
    }
    return Promise.reject(error);
  }
);

export default api;
