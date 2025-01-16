/** @type {Partial<import('typedoc').TypeDocOptions> & import('typedoc-plugin-markdown').PluginOptions} */

module.exports = {
  entryPoints: ['../packages/utils/src/index.ts', '../packages/can/src/index.ts'],
  plugin: ['typedoc-plugin-markdown', './typedoc-to-vitepress.mjs'],
  out: 'docs',
  navigation: {
    includeCategories: true,
    includeGroups: true,
    includeFolders: false,
    compactFolders: true,
    excludeReferences: true
  },
  exclude: ['../packages/**/node_modules/**/*', '../packages/**/*.(test|spec).(js|jsx|ts|tsx)']
}
