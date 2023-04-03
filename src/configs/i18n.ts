import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  // language resources
  resources: {
    fr: {
      translation: {
        homepage_1: "Entrer",
      },
    },
    en: {
      translation: {
        homepage_1: "Enter",
      },
    },
  },
});

export default i18n;
