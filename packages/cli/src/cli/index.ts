import { cac } from 'cac'

import { name, version } from '../../package.json'

import { checkNpmVersions, customInstruction, defaultAction } from '@/lib'

const [CLI_NAME, CLI_VERSIONS] = [name, version]
const cli = cac(CLI_NAME)

cli
  .command('version [...nodeName]', '检查依赖版本')
  .alias('ver')
  .option('-l, --list', '所有版本')
  .option('-r, --registry [path]', 'npm源')
  .action(checkNpmVersions)

cli
  .command('command [instruction]', '自定义指令')
  .option('-c, --create [content]', '新增指令')
  .option('-d, --delete', '删除指定指令')
  .option('--delete-all', '删除全部指令')
  .option('-l, --list', '查看全部指令')
  .action(customInstruction)

cli.command('[instruction]', '执行指令').action(defaultAction)

cli.version(CLI_VERSIONS).help().parse()
