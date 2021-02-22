import i18n from "i18next";
import Backend from "i18next-xhr-backedn";
import { initReactI18next } from "react-i18next";


i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "en",
    backend: {
      /* translation file path*/
      loadPath: "./assets/i18n/{{ns}}/{{lng}}.json",
    },
    fallbackLng: "en",
    debug: true,
    /* can have multiple namespace, in case you want to divide a huge translation into smaller page*/
    ns: ["translations"],
    defaultNS: "translations",
    keSeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeperator: ",",
    },
    react: {
      wait: true,
    },
  });

export default i18n;
