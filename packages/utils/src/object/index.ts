import type { PlainObject, StrOrNum } from '@acanowl/types'
import { isArray, isDefined, isPlainObject } from '../valid'

/**
 * @name 深度克隆
 * @group 工具函数
 * @param name 名称
 * @example
 * ```ts
 * console.log(deepClone({ 'a': { 'b': 1 } })); // { 'a': { 'b': 1 } }
 * ```
 */
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
  if (Array.isArray(obj)) return obj.map((item) => deepClone(item)) as T
  // 处理对象
  const objCopy: PlainObject = {}
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      objCopy[key] = deepClone((obj as PlainObject)[key])
    }
  }
  return objCopy as T
}

/**
 * @name 深度合并
 * @group 工具函数
 * @param name 名称
 * @example
 * ```ts
 * console.log(deepMerge({ 'a': { 'b': 1 } }, { 'a': { 'a': 1, 'c': 2 } })); // { 'a': { 'a': 1, 'b': 1, 'c': 2 } }
 * ```
 */
export const deepMerge = <T, U>(target: T, source: U): T & U => {
  // 如果 target 或 source 不是对象或数组，直接返回
  if (!isDefined(target) || !isDefined(source)) return target as T & U
  let result = source as T & U
  let values: StrOrNum[] = []
  // 如果 target 和 source 都是对象，进行递归合并
  if (isPlainObject(target) && isPlainObject(source)) {
    result = deepClone(target) as T & U
    values = Object.keys(source)
  }
  // 如果 target 和 source 都是数组，进行递归合并
  if (isArray(target) && isArray(source)) {
    result = deepClone(target) as T & U
    values = source.map((_item, index) => index)
  }
  if (values.length) {
    values.forEach((key) => {
      const targetValue = target[key]
      const sourceValue = source[key]
      if (isArray(sourceValue) && isArray(targetValue)) {
        sourceValue.forEach((item, index) => {
          if (isArray(item) && isArray(targetValue[index])) {
            // 如果源值是数组，递归合并
            result[key][index] = [...item, ...targetValue[index]]
          } else {
            // 如果源值是数组，直接替换
            result[key][index] = deepMerge(targetValue[index], item)
          }
        })
      } else if (isPlainObject(sourceValue) && isPlainObject(targetValue)) {
        // 如果源值是对象，递归合并
        result[key] = deepMerge(targetValue, sourceValue)
      } else {
        // 如果是其他类型，直接覆盖
        result[key] = sourceValue
      }
    })
  }
  // 如果目标和源都不是对象，则直接返回（对于基本类型）
  return result
}
