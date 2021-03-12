import en from '../locales/en.js'
import hi from '../locales/hi.js'


export const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-IN',
      name: 'English'
    },
    {
      code: 'hi',
      iso: 'hi-IN',
      name: 'Hindi'
    },
  ],
  vueI18nLoader: true,
  defaultLocale: 'en',
  routes: {},
  vueI18n: {
    fallbackLocale: 'en',
    messages: {en, hi}
  }
}
