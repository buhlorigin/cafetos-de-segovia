import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';

export const LANGS = ['en', 'es'] as const;
export type Lang = (typeof LANGS)[number];

i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, es: { translation: es } },
  lng: window.location.pathname === '/es' || window.location.pathname.startsWith('/es/') ? 'es' : 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  returnObjects: true,
});

export default i18n;
