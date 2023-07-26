import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          fname: "First Name",
          lname: "Last Name",
          mobile: "Mobile Number",
          address: "Address",
          message: "Message",
        },
      },
      nl: {
        translation: {
          fname: "Voornaam",
          lname: "Achternaam",
          mobile: "Mobiel nummer",
          address: "Adres",
          message: "Bericht",
        },
      },
      ["nl-BE"]: {
        translation: {
          fname: "Voornaam",
          lname: "Achternaam",
          mobile: "mobiel nummer",
          address: "Adres",
          message: "Bericht",
        },
      },
    },
    detection: {
      // order and from where user language should be detected
      order: [
        'navigator',
        'querystring',
        'cookie',
        'localStorage',
        'sessionStorage',
        'htmlTag',
        'path',
        'subdomain',
      ],
    
      // keys or params to lookup language from
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
    
      // cache user language on
      caches: ['localStorage', 'cookie'],
      excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)
    
      // optional expire and domain for set cookie
      cookieMinutes: 10,
      cookieDomain: 'myDomain',
    
      // optional htmlTag with lang attribute, the default is:
      htmlTag: document.documentElement,
    
      // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
      cookieOptions: { path: '/' },
    },
    //lng: "nl", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
