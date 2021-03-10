export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'DC PhysioCare',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', type: 'text/css', href: '/css/bootstrap.min.css'},
      {rel: 'stylesheet', type: 'text/css', href: '/css/icons/fontawesome/css/style.css'},
      {rel: 'stylesheet', type: 'text/css', href: '/css/icons/icon2/style.css'},
      {rel: 'stylesheet', type: 'text/css', href: '/css/ilmosys-icon.css'},
      {rel: 'stylesheet', type: 'text/css', href: '/css/style.css'},
    ],
    script: [
      {src: '/js/jquery.js', body: true, defer: true},
      {src: '/js/bootstrap.min.js', body: true, defer: true},
      {src: '/js/vendors/slick/slick.min.js', body: true, defer: true},
      {src: '/js/vendors/jquery.easing.min.js', body: true, defer: true},
      {src: '/js/vendors/stellar.js', body: true, defer: true},
      {src: '/js/vendors/swipebox/js/jquery.swipebox.min.js', body: true, defer: true},
      {src: '/js/vendors/isotope/isotope.pkgd.js', body: true, defer: true},
      {src: '/js/main.js', body: true, defer: true},


    ]
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: [],

  modules: [
    '@nuxtjs/axios',
  ],
  axios: {},
  build: {}
}
