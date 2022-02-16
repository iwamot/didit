export default {
  target: 'static',
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Heebo:500|Noto+Serif+JP:500&display=swap&subset=japanese',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/meyer-reset/2.0/reset.css', '@/assets/global.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    transpile: [],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    babel: {
      babelrc: true,
    },
  },

  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  generate: {
    routes() {
      const glob = require('glob')
      const path = require('path')
      return glob.sync('./data/*.json').map(function (file) {
        return '/' + path.basename(file, '.json')
      })
    },
    subFolders: false,
  },
}
