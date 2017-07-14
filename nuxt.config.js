/*eslint-env node*/
var webpack = require('webpack');

module.exports = {
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        '$': 'jquery'
        //'_': 'lodash'
      })
    ],
    vendor: [
      'axios', 'jquery'
    ]
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      {
        rel: 'stylesheet', href: '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        integrity: 'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN', crossorigin: 'anonymous'
      }
    ]
  },
  css: [
    { src:'~assets/eightk.scss', lang:'scss' }
  ],
  plugins: [
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/foundation.js'}
  ]
};