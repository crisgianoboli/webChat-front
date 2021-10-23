import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from './es-AR/translation'
import { language } from '../config'

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  fallbackLng: 'es-AR',
  keySeparator: false,
  debug: true,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
