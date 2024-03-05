import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import ptTranslation from "./locales/pt.json";

i18n.use(initReactI18next).init({
  lng: "pt", //Definir linguagem inicial
  fallbacklng: "pt", //definir idioma de fallback para caso  a tradução nao estiver disponivel
  resources: {
    en: {
      translation: enTranslation,
    },
    pt: {
      translation: ptTranslation,
    },
    interpolation: {
      escapeValue: false,
    },
  },
});
export default i18n;
