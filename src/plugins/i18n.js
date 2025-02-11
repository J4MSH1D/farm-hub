import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const baseUrl = import.meta.env.VITE_BASE_URL,
  saveMissingStatus = import.meta.env.VITE_SAVE_MISSING_LANG;

const locale = localStorage.getItem("i18nextLng") || "uz";

i18next
  .use(I18NextHttpBackend)
  .use(LanguageDetector)
  .init({
    saveMissing: false,
    fallbackLng: locale,
    detection: {
      order: ["localStorage", "sessionStorage", "queryString"],
      caches: ["localStorage", "sessionStorage", "queryString"],
    },
    backend: {
      loadPath: `${baseUrl}/api/Translation/ImportTranslations?language={{lng}}`,
      addPath: `${baseUrl}/api/Translation/Add`,
      withCredentials: true,
      customHeaders: {
        "ngrok-skip-browser-warning": "69420",
      },
      parse: function (data) {
        const parseData = JSON.parse(data);
        const defaultLang = parseData["content"];
        return defaultLang;
      },
      parsePayload: function (namespace, key, fallbackValue) {
        return {
          ru: "",
          uz: "",
          eng: "",
          cyrl: "",
          code: fallbackValue || "",
        };
      },
      debug: true,
    },
  });

export default i18next;
