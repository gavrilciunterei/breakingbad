import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import es from './es.json';
import en from './en.json';

export default i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['en', 'es'],
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
    fallbackLng: 'en',

    detection: {
      order: [
        'cookie',
        'navigator',
        'htmlTag',
        'localStorage',
        'querystring',
        'sessionStorage',
        'path',
        'subdomain',
      ],
      caches: ['cookie'],
    },
  });
