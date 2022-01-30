const path = require('path')
const sidebar = [
  'CONTRIBUTING',
  {
    title: 'Elements',
    children: [
      'elements/',
      ['elements/donate-button', 'DonateButton'],
      ['elements/vbutton', 'VButton'],
      ['elements/vcheckbox', 'VCheckbox'],
      ['elements/vradio', 'VRadio']
    ]
  },
  {
    title: 'Patterns',
    children: [
      'patterns/',
      ['patterns/app-modal', 'App Modal'],
      ['patterns/footer', 'Footer'],
      ['patterns/locale', 'Locale'],
      ['patterns/vheader', 'VHeader']
    ]
  }
]
console.log(__dirname)
module.exports = {
  chainWebpack (config, isServer) {
    // config is an instance of ChainableConfig
    config.resolve.alias.set('@', path.resolve(__dirname + '../../../src/'))
  },
  themeConfig: {
    title: 'Vocabulary Components',
    displayAllHeaders: true,
    nav: [
      {
        text: 'Elements',
        link: '/elements/'
      },
      {
        text: 'Patterns',
        link: '/patterns/'
      }
    ],
    sidebar: sidebar,
    smoothScroll: true,
    repo: 'creativecommons/vocabulary-components',
    editLinks: true,
    docsDir: 'docs'
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/@creativecommons/vocabulary-components@0.2.0/dist/vocabulary-components.css'
      }
    ]
  ],
  plugins: [['@vuepress/back-to-top', true]],
  extraWatchFiles: ['.vuepress/config/**']
}
