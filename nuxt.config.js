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
    ],
    script: [
      { innerHTML: `{
        "@context": "http://schema.org",
        "@type": "Organization",
        "url": "http://eigh.tk", "name": "Eightk",
        "logo": "https://coinprism.blob.core.windows.net/profile/icon/AZHHLvzKbsEPZUQXvCfihkEknF71GHNpPH.jpg",
        "brand": {
          "@type": "Brand",
          "name": "8K"
        },
        "department": {
          "@type": "Organization",
          "name": "8K Assets",
          "email": "coin@eigh.tk",
          "url": "https://assets.eigh.tk"
        }
      }`,
        type: 'application/ld+json' }
    ],
    __dangerouslyDisableSanitizers: ['script']
  },
  css: [
    { src:'~assets/eightk.scss', lang:'scss' }
  ],
  plugins: [
    { src: '~plugins/ga.js', ssr: false },
    { src: '~plugins/foundation.js'}
  ]
};