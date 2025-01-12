import pc from 'picocolors'
import { useExecCommand, useInputPrompts } from '@/hooks'
import type { PlainObject } from '@acanowl/types'
import { errorCatch, isBoolean } from '@acanowl/utils'

const checkNpmVersions = async (nodeName: string[] = [], options: PlainObject) => {
  const { list = false, registry = false } = options
  if (!nodeName?.length) {
    const nodeNameString = await useInputPrompts({ message: '请输入npm名称' })
    nodeName = nodeNameString.split(/\s/).filter(Boolean)
    if (!nodeName?.length) return
  }
  let registryCommand = ''
  if (isBoolean(registry) && registry) {
    registryCommand = await useInputPrompts({ message: '请输入npm源' })
  }
  registryCommand = registryCommand ? ` --registry=${registry}` : ''
  try {
    nodeName.forEach(async (name) => {
      const command = `npm view ${name} version${list ? 's' : ''}${registryCommand}`
      let versions: string | string[] = await useExecCommand(command, false)
      versions = versions.replace(/[\n\s]+/g, '')
      if (versions.includes('[') && versions.includes(']')) {
        versions = versions.slice(1, -1).split(',') as string[]
        // 最大长度
        const maxLen = Math.max(...versions.map((item) => item.length)) + 1
        // 转换成字符串
        versions = versions.reduce((text, version, index) => {
          if (index % 4 === 0) text += '\n'
          text += pc.green(version) + pc.white(index !== versions.length - 1 ? ',' : '')
          // 填补空格
          text += ' '.repeat(maxLen - version.length)
          return text
        }, '')
      }
      console.log(`${name} ${list ? '所有' : '最新'}版本: `, versions)
    })
  } catch (error) {
    console.error('出错', errorCatch(error))
  }
}

export default checkNpmVersions
