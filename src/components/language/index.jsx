import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { Eng } from "../../locale/eng";
import { Rus } from "../../locale/rus";
import { Uzb } from "../../locale/uzb";

i18next.use(initReactI18next).init({
  resources: {
    eng: { translation: Eng },
    rus: { translation: Rus },
    uzb: { translation: Uzb },
  },
  lng: localStorage.getItem("lang") || "eng",
  fallbackLng: "eng",
});
