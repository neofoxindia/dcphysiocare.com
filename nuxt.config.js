import {I18N} from './config/i18n';
import {json_ld, meta} from './config/seo';

export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'DC PhysioCare',
    htmlAttrs: {
      lang: 'en'
    },
    meta,
    link: [
      {rel: 'preconnect', href: 'https://fonts.gstatic.com'},
      // {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      // ---------- Fonts ----------
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Raleway:wght@300;400&family=Poppins:wght@300;500;700;800&display=swap'
      },
    ],
    script: [
      json_ld,
      {src: '/js/jquery.js', body: true, defer: true},
    ]
  },

  css: ['@/assets/scss/bootstrap/bootstrap',
    '@/assets/scss/font/fontawesome'],

  plugins: [],

  components: true,

  buildModules: [],

  modules: [
    // '@nuxtjs/axios',
    ['nuxt-i18n', I18N],
  ],
  axios: {},
  build: {}
}
