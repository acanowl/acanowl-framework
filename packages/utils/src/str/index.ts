import type { PlainObject } from '@acanowl/types'
import { hasKey, isDefined, isValidNumber, isValidString } from '../valid'

/**
 * 获取小数位长度
 * @group String
 * @param {unknown} str 任意值
 * @param {number} n 小数位长度
 * @returns {number}
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/str/getDecimalLength.md}
 */
export const getDecimalLength = (str: unknown, n?: number): number => {
  let decimalLen = 0
  if (isDefined(str) && (isValidNumber(str) || isValidString(str))) {
    const [, decimal = ''] = String(str).split('.')
    decimalLen = isValidNumber(n) ? n : decimal.length
  }
  return decimalLen
}

/**
 * 获取url参数
 * @group String
 * @param {string} url 地址
 * @returns {PlainObject}
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/str/getUrlParams.md}
 */
export const getUrlParams = (url: string): PlainObject => {
  const params: PlainObject = {}
  const regex = /[?&]([^&#=]+)=([^&#?]*)/g
  let match: RegExpExecArray | null
  while ((match = regex.exec(url)) !== null) {
    params[match[1]] = match[2]
  }
  return params
}

/**
 * 获取url参数指定key值
 * @group String
 * @param {string} url 地址
 * @param {string} key 参数
 * @returns {string}
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/str/getUrlParamsByKey.md}
 */
export const getUrlParamsByKey = (url: string, key: string): string => {
  const params = getUrlParams(url)
  return hasKey(params, key) ? ((params[key] || '') as string) : ''
}

/**
 * 四舍五入
 * @param {unknown} value 需四舍五入的数值
 * @param {number | undefined} limit 小数位长度
 * @returns {string} 四舍五入后的结果
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/str/roundNumber.md}
 */
export const roundNumber = (value: unknown, limit?: number): string => {
  if (isDefined(value) && (isValidNumber(value) || isValidString(value))) {
    // 0~N => limit / undefined => 原有小数位
    limit = getDecimalLength(value, limit)
    const factor = Math.pow(10, limit)
    // 避免 value * factor 出现精度丢失问题
    const scienceValue = Number((Number(value) * factor).toFixed(limit))
    return (Math.round(scienceValue) / factor).toFixed(limit)
  }
  return ''
}

/**
 * 金额格式化
 * @param {unknown} value 需金额格式化的数值
 * @param {number | undefined} limit 小数位长度
 * @returns {string} 金额格式化后的结果
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/str/currency.md}
 */
export const currency = (value: unknown, limit?: number, defaultValue: string = ''): string => {
  const regex = /\B(?=(?:\d{3})+$)/g
  // 未定义 | 数字 | 字符串
  if (isDefined(value) && (isValidNumber(value) || isValidString(value))) {
    // 获取小数位长度
    value = roundNumber(value, getDecimalLength(value, limit))
    // 判断是否是小数
    const isDecimal = String(value).indexOf('.') > -1

    const [intPart, decimalPart] = String(value).split('.')
    return intPart.replace(regex, ',') + (isDecimal ? '.' + decimalPart : '')
  }
  return defaultValue
}
