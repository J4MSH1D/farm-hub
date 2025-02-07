import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import uz from "../localization/uz.json";
import ru from "../localization/ru.json";

const locale = localStorage.getItem("i18nextLng") || "uz";

i18next
  .use(I18NextHttpBackend)
  .use(LanguageDetector)
  .init({
    lng: locale,
    fallbackLng: locale,
    resources: {
      uz: {
        translation: uz,
      },
      ru: {
        translation: ru,
      },
    },
    debug: false,
  });

export default i18next;
