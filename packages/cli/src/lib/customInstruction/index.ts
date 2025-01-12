import pc from 'picocolors'
import { Choice } from 'prompts'
import { isArray, isString } from '@acanowl/utils'
import { useCache, useCheckboxPrompts, useConfirmPrompts, useInputPrompts, useCliTable } from '@/hooks'
import type { PlainObject } from '@acanowl/types'
import { CACHE_INSTRUCT_KEY, CLI_KEY } from '@/config'

const { getCache, setCache } = useCache(CACHE_INSTRUCT_KEY)

const customInstruction = async (instruction: string, options: PlainObject<string>) => {
  const instructionJson = await getCache()
  try {
    const { create, delete: del, deleteAll, list } = options
    // 删除全部自定义指令不用选择/输入自定义指令
    if (!deleteAll && !list) {
      if (!instruction) {
        const choices: Choice[] = Object.entries(instructionJson).map(([title]) => ({ title, value: title }))
        if (choices.length && del) {
          instruction = await useCheckboxPrompts({ message: '请选择自定义指令', choices })
        } else {
          instruction = await useInputPrompts({ message: '请输入自定义指令' })
        }
        if (!instruction) {
          console.log('请选择自定义指令')
          return
        }
      }
    }
    // 删除单个
    if (del) {
      if (instruction) {
        if (isArray(instruction)) {
          instruction.forEach((k) => {
            if (k && isString(k)) {
              delete instructionJson[k]
            }
          })
        } else {
          delete instructionJson[instruction]
        }
        const cacheJson = await setCache(instructionJson, true)
        console.log(useCliTable(cacheJson))
        console.log(`已删除 ${pc.cyan(`${CLI_KEY} ${instruction}`)} 指令`)
      }
      return
    }
    // 删除所有
    if (deleteAll) {
      const isDeleteAll = await useConfirmPrompts({ message: '是否删除所有自定义指令?', initial: false })
      if (isDeleteAll) {
        await setCache({}, true)
        console.log('已删除所有指令')
      }
      return
    }
    // 查看
    if (list) {
      if (instructionJson && Object.keys(instructionJson).length) {
        console.log(useCliTable(instructionJson))
      } else {
        console.log('暂无自定义指令')
      }
      return
    }
    // 新增
    let command = create
    if (!command) {
      command = await useInputPrompts({ message: '请输入自定义指令内容' })
    }
    // useInputPrompts 取消操作返回undefined
    if (command) {
      const cacheJson = await setCache({ [instruction]: command })
      console.log(useCliTable(cacheJson))
      console.log(`新增指令成功，可通过 ${pc.cyan(`${CLI_KEY} ${instruction}`)} 执行`)
    }
  } catch (error) {
    console.log('出错：', error)
  }
}

export default customInstruction
