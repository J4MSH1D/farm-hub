import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";

import uz from "../localization/uz.json";
import ru from "../localization/ru.json";
import en from "../localization/en.json";

i18next.use(I18NextHttpBackend).init({
  lng: "ru",
  fallbackLng: "ru",
  resources: {
    uz: {
      translation: uz,
    },
    ru: {
      translation: ru,
    },
    en: {
      translation: en,
    },
  },
  debug: true,
});

export default i18next;
