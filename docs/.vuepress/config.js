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
console.log(__dirname + '/../../src/')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname + '../../src/')
      }
    }
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
  head: [['link', { rel: 'icon', href: `/logo.png` }]],
  plugins: [['@vuepress/back-to-top', true]],
  extraWatchFiles: ['.vuepress/config/**']
}
