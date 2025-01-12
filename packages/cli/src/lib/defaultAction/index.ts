import pc from 'picocolors'
import { errorCatch, isString } from '@acanowl/utils'
import { useCache, useExecCommand } from '@/hooks'
import { CACHE_INSTRUCT_KEY, CLI_KEY } from '@/config'

const { getCacheByKey } = useCache(CACHE_INSTRUCT_KEY)

const defaultAction = async (instructKey: string) => {
  try {
    const instruction = await getCacheByKey(instructKey)
    if (instructKey) {
      if (isString(instruction) && instruction) {
        await useExecCommand(instruction)
      } else {
        console.log(`未找到 ${pc.cyan(`${CLI_KEY} ${instructKey}`)} 指令`)
      }
    }
  } catch (error) {
    console.log('出错：', errorCatch(error))
  }
}

export default defaultAction
