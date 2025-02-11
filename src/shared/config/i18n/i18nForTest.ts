import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

void i18n
    .use(initReactI18next)
    .init({
        lng: 'ru',
        fallbackLng: 'ru',
        resources: { ru: { translationsNS: {} } },

        debug: true,

        interpolation: {
            escapeValue: false // not needed for react!!
        }

    })

export default i18n
