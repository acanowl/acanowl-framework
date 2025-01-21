import { defineConfig } from 'vitepress'
import navigation from '../navigation.json'

const reg = /docs\/|\/src/g

const formatSlideTab = (data: object) => {
  const slideTabMap = Object.keys(data)
  return slideTabMap.map((item) => ({ text: item.replace(reg, ''), link: `${item}/README.md` }))
}
const formatLogSlideTab = (data: object) => {
  const slideTabMap = Object.keys(data)
  return slideTabMap.map((item) => {
    const modulesName = item.replace(reg, '')
    return { text: modulesName, link: `log/${modulesName}/CHANGELOG.md` }
  })
}

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
      {
        text: '@acanowl 生态',
        items: formatSlideTab(navigation)
      },
      {
        text: '@acanowl 更新日志',
        items: formatLogSlideTab(navigation)
      }
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
