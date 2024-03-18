import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import hi from "src/assets/locales/hi/translation.json";
import en from "src/assets/locales/en/translation.json";
import Backend from "i18next-xhr-backend";
// import LanguageDetector from "i18next-browser-languagedetector";

// export const initializeI18n  = async (lang:string): Promise<void> => {

// await
i18next
    .use(initReactI18next)
    .use(Backend)
    .init({
        compatibilityJSON: "v3",
        resources: {
            en: {
                translation: en, //changed here
            },
            hi: {
                translation: hi, //changed here
            },
        },
        // lng:'en',
        fallbackLng: "en",
        react: {
            useSuspense: false,
        },
        debug: false,
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });
// }