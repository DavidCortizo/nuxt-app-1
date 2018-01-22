module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Spacetime',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'test 1' }
    ],
    link: [
      { rel: 'icon', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: '/favicon.ico' }
    ]
  },
  plugins: ['~plugins/vuetify.js'],
  css: ['~assets/app.styl'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      // if (ctx.dev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    },
    vendor: ['axios', 'vuetify'],
    modules: ['nuxt-material-design-icons']
  }
}
