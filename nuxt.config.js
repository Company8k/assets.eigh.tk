/*eslint-env node*/
module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      {
        rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.min.css',
        integrity: 'sha256-Q9c+RVayp4Y4gEKE3jaABDEwnMlDf6cFEWEQSzFaOB8=', crossorigin: 'anonymous'
      }
    ],
    bodyAttrs:{
      class: 'eightk'
    }
  },
  css: [
    { src:'~assets/eightk.scss', lang:'scss' }
  ]
};