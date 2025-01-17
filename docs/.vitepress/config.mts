import { defineConfig } from 'vitepress'
import pkg from '../../package.json'
import navigation from '../navigation.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '@acanowl废品站',
  description: '徐仔的破烂回收站',
  base: '/',
  appearance: 'dark',
  markdown: {
    lineNumbers: true
  },
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      dir: '/',
      title: '@acanowl',
      description: '徐仔的破烂回收站'
    }
  },
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '@acanowl/utils', link: 'docs/utils/src/README.md'},
      { text: '@acanowl/types', link: 'docs/types/src/README.md'},
      { text: `v${pkg.version}`, items: [{ text: '更新日志', link: 'CHANGELOG' }] }
    ],
    sidebar: navigation,
    outline: {
      level: [2, 4],
      label: '本页目录'
    },
    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.frontmatter?.search === false) return ''
          if (env.relativePath.startsWith('docs/modules')) return ''
          return html
        },
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '翻翻垃圾',
                buttonAriaLabel: '翻翻垃圾'
              },
              modal: {
                noResultsText: '没有找到能用的东西',
                resetButtonTitle: '换个垃圾桶找找',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/acanowl/acanowl-framework/tree/master/packages/utils' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Hsu'
    }
  }
})
