import axios from "axios";
import notification from "../utils/notification";
import store from "../store";
import { storeService } from "@/services/storage";
import router from "@/router";
import i18next from "@/plugins/i18n";

const baseURL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  config => {
    const token = store.state.token;
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    store.commit("increaseCounter");
    return config;
  },
  function (error) {
    notification.error(error.message);
    store.commit("decreaseCounter");
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    store.commit("decreaseCounter");
    return response.data;
  },

  function (error) {
    store.commit("decreaseCounter");
    if (error?.response?.data?.error) {
      console.log("axios error ");
      // customError bo'sh bo'lsagina default error message ko'rsatamiz
      if (!store.state.customError) {
        if (error.status !== 500) {
          notification.error(error.response.data.error);
        } else {
          notification.error(i18next.t("Системная ошибка"));
        }
      } else {
        notification.error(store.state.customError);
        // Notification ko'rsatilgandan keyin customError ni tozalaymiz
        store.commit("setCustomError", null);
      }
    }
    console.log(error, "error");

    if (error?.response?.status === 401) {
      storeService.LogOut();
      router.push("/login");
    }
    return Promise.reject(error);
  }
);

export default api;
