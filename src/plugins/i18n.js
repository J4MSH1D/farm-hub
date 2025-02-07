import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import uz from "../localization/uz.json";
import ru from "../localization/ru.json";
import { apiService } from "@/services/ApiService";

const baseUrl = import.meta.env.VITE_BASE_URL;

const locale = localStorage.getItem("i18nextLng") || "uz";

i18next
  .use(I18NextHttpBackend)
  .use(LanguageDetector)
  .init({
    lng: locale,
    fallbackLng: locale,
    backend: {
      addPath: `${baseUrl}/api/Translation/Add`,
      loadPath: `${baseUrl}/api/Translation/ImportTranslations?language={{lng}}`,
      withCredentials: true,
      customHeaders: {
        "ngrok-skip-browser-warning": "69420",
      },
      parse: async function (data) {
        console.log(data);
        const parseData = JSON.parse(data);
        const defaultLang = parseData["content"];
        return defaultLang;
      },
      // request: async function (options, url, payload, callback) {
      //   console.log(url);
      //   // const response = await apiService.api.get(`/api/Translation/ImportTranslations?language=${{ locale }}`);
      //   // console.log(response);
      // },
      parsePayload: function (namespace, key, fallbackValue) {
        return {
          ru: fallbackValue,
          uz: "",
          code: fallbackValue || "",
        };
      },
    },
  });

export default i18next;
