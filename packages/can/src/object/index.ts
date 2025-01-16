import type { PlainObject } from '@acanowl/types'
import { isArray, isDefined, isPlainObject } from '../valid'

/**
 * 深度克隆
 * @group Object
 * @param {T} obj 要克隆的对象
 * @returns {T} 克隆后的对象
 * @example
 * ```更多示例```
 * {../../docs/test/object/deepClone.md}
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

export type Customizer<T = unknown> = (targetValue: T, sourceValue: T) => T

/**
 * 深度合并
 * @group Object
 * @param {T} target 目标对象
 * @param {U} source 源对象
 * @param {Customizer} customizer 数组合并自定义函数
 * @returns {T & U} 合并后的对象
 * @example
 * ```更多示例```
 * {../../docs/test/object/deepMerge.md}
 */
export const deepMerge = <T, U>(target: T, source: U, customizer?: Customizer): T & U => {
  // 如果 target 或 source 不是对象或数组，直接返回
  if (!isDefined(target) || !isDefined(source)) {
    return (source || target) as T & U
  }
  // 如果 target 和 source 都是对象，进行递归合并
  if (isPlainObject(target) && isPlainObject(source)) {
    const result = deepClone(target) as T & U
    for (const key in source) {
      // 如果 key 已存在于 target，递归合并
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        ;(result as PlainObject)[key] = deepMerge(target[key], source[key], customizer)
      }
    }
    return result
  }
  // 如果 target 和 source 都是数组，进行递归合并
  if (isArray(target) && isArray(source)) {
    return (customizer ? customizer(target, source) : source) as T & U
  }
  // 如果目标和源都不是对象，则直接返回（对于基本类型）
  return (source || target) as T & U
}
