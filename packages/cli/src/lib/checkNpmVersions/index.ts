import { useExecCommand, useInputPrompts } from '@/hooks'
import type { PlainObject } from '@acanowl/types'
import { isBoolean } from '@acanowl/utils'

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
        versions = versions.slice(1, -1).split(',')
        versions = versions.map((item) => item.trim().replace(/^'|'$/g, ''))
      }
      console.log(`${name} ${list ? '所有' : '最新'}版本: `, versions)
    })
  } catch (error) {
    console.error(error)
  }
}

export default checkNpmVersions
