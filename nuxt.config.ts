import NuxtConfiguration from '@nuxt/config'

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const pkg = require('./package');

const config: NuxtConfiguration = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#fff'},

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        if(config.module == null) return;
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  env: {
    F_APIKEY: process.env.F_APIKEY || '',
    F_AUTHDOMAIN: process.env.F_AUTHDOMAIN || 'boardgame-management.firebaseapp.com',
    F_DATABASEURL: process.env.F_DATABASEURL || 'https://boardgame-management.firebaseio.com',
    F_PROJECTID: process.env.F_PROJECTID || 'boardgame-management',
    F_STORAGEBUCKET: process.env.F_STORAGEBUCKET || 'boardgame-management.appspot.com',
    F_MESSAGINGSENDERID: process.env.F_MESSAGINGSENDERID || ''
  },

};

export default config
