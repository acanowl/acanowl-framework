import type { PlainObject } from '@acanowl/types'
import { isArray, isDefined, isObject, isPlainObject } from './valid'

export const deepClone = <T>(obj: T): T => {
  // 如果 obj 不是对象或数组，直接返回
  if (obj === null || typeof obj !== 'object') return obj
  // 处理日期对象
  if (obj instanceof Date) return new Date(obj.getTime()) as T
  // 处理正则表达式
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags) as T
  // 处理 Map
  if (obj instanceof Map) {
    const mapCopy = new Map<unknown, unknown>()
    obj.forEach((value, key) => {
      mapCopy.set(deepClone(key), deepClone(value))
    })
    return mapCopy as T
  }
  // 处理 Set
  if (obj instanceof Set) {
    const setCopy = new Set<unknown>()
    obj.forEach((value) => {
      setCopy.add(deepClone(value))
    })
    return setCopy as T
  }
  // 处理数组
  if (Array.isArray(obj)) {
    const arrCopy: unknown[] = []
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepClone(obj[i])
    }
    return arrCopy as T
  }
  // 处理对象
  const objCopy: PlainObject = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      objCopy[key] = deepClone((obj as PlainObject)[key])
    }
  }
  return objCopy as T
}

export const deepMerge = (target: PlainObject | unknown[], source: PlainObject | unknown[]) => {
  if (!isDefined(target) || !isDefined(source)) return source
  // 如果 target 和 source 都是对象，进行递归合并
  if (isObject(target) && isObject(source)) {
    const result = deepClone(target) // 保留 target 的所有属性
    // 合并 source 中的属性
    for (const key in source) {
      if (isPlainObject(source) && isPlainObject(result)) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          // 都是对象
          if (Object.prototype.hasOwnProperty.call(result, key) && isObject(result[key]) && isObject(source[key])) {
            result[key] = deepMerge(result[key], source[key]) // 如果两者都是对象，递归合并
          } else {
            result[key] = source[key] // 否则直接覆盖 target 的属性
          }
        }
      } else if (isArray(source) && isArray(result)) {
        const index = Number(key)
        if (Object.prototype.hasOwnProperty.call(source, index)) {
          // 都是对象
          if (
            Object.prototype.hasOwnProperty.call(result, index) &&
            isObject(result[index]) &&
            isObject(source[index])
          ) {
            result[index] = deepMerge(result[index], source[index]) // 如果两者都是对象，递归合并
          } else {
            result[index] = source[index] // 否则直接覆盖 target 的属性
          }
        }
      }
    }
    return result
  }
  // 如果目标和源都不是对象，则直接覆盖（对于基本类型）
  return source
}
