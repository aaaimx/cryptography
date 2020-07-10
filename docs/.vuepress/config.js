const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Cryptography',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/Cryptography/',

  /**
   * AntDocs theme for AntDesign for vue
   * Ref: https://antdocs.seeyoz.cn/guide/getting-started.html#引用主题
   */
  theme: 'antdocs',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'https://github.com/rnovec',
    editLinks: false,
    logo: 'https://pablomagaz.com/content/images/2020/01/NodeJs.png',
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Intro',
        link: '/intro/'
      },
      {
        text: 'Core',
        link: '/core/'
      },
      {
        text: 'Streams',
        link: '/streams/'
      },
      {
        text: 'Express',
        link: '/express/'
      },
      {
        text: 'Middlewares',
        link: '/middlewares/'
      },
      {
        text: 'MongoDB',
        link: '/mongodb/'
      },
      {
        text: 'Avanzado',
        link: '/advanced/'
      },
      {
        text: 'Glosario',
        link: '/glossary/'
      }
    ],
    sidebar: {
      '/intro/': [
        {
          title: 'Intro',
          collapsable: false,
          children: ['', '2-npm', '3-config', '4-modules']
        }
      ],
      '/core/': [
        {
          title: 'Core',
          collapsable: false,
          children: [
            '',
            '6-http_server',
            '7-fs_module',
            '8-update_files',
            '9-async_vs_sync',
            '10-path_module',
            '11-events',
            '12-timers',
            '13-canceling_timers'
          ]
        }
      ],
      '/streams/': [
        {
          title: 'Streams',
          collapsable: false,
          children: [
            '',
            '2-writable_readable_streams',
            '3-writable_stream_events',
            '4-writable_stream_functions',
            '5-readable_stream_events',
            '6-readable_stream_functions',
            '7-piping'
          ]
        }
      ],
      '/express/': [
        {
          title: 'Express',
          collapsable: false,
          children: [
            '',
            '1-setup',
            '2-request-handler',
            '3-api-requests',
            '4-get-users',
            '6-users-post',
            '7-get-users-id',
            '8-update-users',
            '9-status-codes',
            '10-nodemon'
          ]
        }
      ],
       '/middlewares/': [
        {
          title: 'Middlewares',
          collapsable: false,
          children: [
            '',
            '12-routes-code',
            '13-body_parser',
            '15-cors',
          ]
        }
      ],
      '/mongodb/': [
        {
          title: 'MongoDB',
          collapsable: false,
          children: [
            '',
            '3-install_mongodb',
            '4-mongoose',
            '5-config',
            '6-config',
            '7-models',
            '8-code-model'
          ]
        }
      ],
      '/advanced/': [
        {
          title: 'Conceptos Avanzados',
          collapsable: false,
          children: [
            '',
            'pg',
            'tdd',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']
}