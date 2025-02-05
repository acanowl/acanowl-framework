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

    // 处理负数的情况
    const isNegative = Number(value) < 0
    const absoluteValue = Math.abs(Number(value))

    // 如果 limit=0，直接对整数部分四舍五入
    if (limit === 0) {
      const roundedValue = Math.round(absoluteValue)
      return isNegative ? `-${roundedValue}` : `${roundedValue}`
    }

    // 将数字转换为字符串
    const valueStr = absoluteValue.toString()

    // 分割整数部分和小数部分
    let [integerPart, decimalPart = ''] = valueStr.split('.')

    // 补齐小数部分
    decimalPart = decimalPart.padEnd(limit, '0')

    // 截取需要保留的小数位数
    const preservedDecimals = decimalPart.slice(0, limit)
    const nextDecimal = decimalPart[limit] || '0' // 下一位小数

    // 判断是否需要进位
    let roundedDecimal = preservedDecimals
    if (nextDecimal >= '5') {
      // 手动进位
      let temp = (parseInt(preservedDecimals, 10) + 1).toString()

      // 处理进位到整数部分
      if (temp.length > limit) {
        const carry = parseInt(temp.slice(0, temp.length - limit), 10)
        integerPart = (parseInt(integerPart, 10) + carry).toString()
        temp = temp.slice(-limit) // 保留后 limit 位
      }
      roundedDecimal = temp.padStart(limit, '0') // 补齐前导零
    }
    // 确保小数部分长度正确（补零到指定位数）
    roundedDecimal = roundedDecimal.padEnd(limit, '0')
    // 组合整数部分和小数部分
    const roundedValue = `${integerPart}.${roundedDecimal}`

    return isNegative ? `-${roundedValue}` : `${roundedValue}`
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
