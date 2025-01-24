import type { PlainObject } from '@acanowl/types'
import { hasKey, isDefined, isNonZeroNumber, isValidNumber, isValidString } from '../valid'

/**
 * 获取小数位长度
 * @group String
 * @param {unknown} str 任意值
 * @param {number} n 小数位长度
 * @defaultValue 0
 * @returns {number}
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/str/getDecimalLength.md}
 */
export const getDecimalLength = (str: unknown, n: number = 0): number => {
  let decimalLen = 0
  if (isDefined(str) && (isValidNumber(str) || isValidString(str))) {
    const [, decimal = ''] = String(str).split('.')
    decimalLen = isNonZeroNumber(n) ? n : decimal.length
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
    limit = isValidNumber(limit) ? limit : getDecimalLength(value)
    const factor = Math.pow(10, limit)
    return (Math.round(Number(value) * factor) / factor).toFixed(limit)
  }
  return ''
}
