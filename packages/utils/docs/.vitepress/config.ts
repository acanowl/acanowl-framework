import { defineConfig } from 'vitepress'
import pkg from '../../package.json'
import navigation from './navigation.json'

export default defineConfig({
  description: 'typescript 工具库',
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
      title: '@acanowl/util',
      description: 'typescript 工具库'
    }
  },
  lastUpdated: true,
  themeConfig: {
    sidebar: { '/src/': navigation },
    outline: {
      level: [2, 4],
      label: '本页目录'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Hsu'
    },
    nav: [
      {
        text: `v${pkg.version}`,
        items: [{ text: '更新日志', link: 'src/documents/CHANGELOG' }]
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/acanowl/acanowl-framework/tree/master/packages/utils'
      }
    ],
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
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  }
})
