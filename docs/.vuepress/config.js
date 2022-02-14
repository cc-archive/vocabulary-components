const path = require('path')
const sidebar = [
  'CONTRIBUTING',
  {
    title: 'Elements',
    collapsable: false,
    children: [
      ['elements/', 'Index'],
      ['elements/donate-button', 'DonateButton'],
      ['elements/vbutton', 'VButton'],
      ['elements/vcheckbox', 'VCheckbox'],
      ['elements/vradio', 'VRadio']
    ]
  },
  {
    title: 'Patterns',
    collapsable: false,
    children: [
      ['patterns/', 'Index'],
      ['patterns/app-modal', 'App Modal'],
      ['patterns/footer', 'Footer'],
      // ['patterns/locale', 'Locale'],
      // incomplete
      ['patterns/vheader', 'VHeader']
    ]
  }
]

module.exports = {
  chainWebpack (config, isServer) {
    // config is an instance of ChainableConfig
    config.resolve.alias.set('@', path.resolve(__dirname + '../../../src/'))
  },
  title: 'Vocabulary Components',
  themeConfig: {
    smoothScroll: true,
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
  ],
  plugins: [['@vuepress/back-to-top', true]],
  extraWatchFiles: ['.vuepress/config/**']
}
