import { isString, isValidDate, isValidNumber } from '@/valid'

/**
 * 时间格式化
 * @group Date
 * @param {Date} date 时间对象
 * @param {string} fmt 时间字符串格式
 * @returns {string}
 * @example
 * ```更多示例```
 * {@include ../../docs/test/date/dateFormat.md}
 */
export const dateFormat = (date: Date, fmt: string = 'yyyy-MM-dd'): string => {
  // 非有效时间对象 返回''
  if (!isValidDate(date)) return ''

  const d = new Date(date)
  const q: number = 3 // 季度
  const o = {
    'M+': d.getMonth() + 1, //月份
    'd+': d.getDate(), //日
    'h+': d.getHours(), //小时
    'm+': d.getMinutes(), //分
    's+': d.getSeconds(), //秒
    'q+': Math.floor((d.getMonth() + q) / q), //季度
    S: d.getMilliseconds() //毫秒
  }
  const yearNum: number = 4
  const yearRegExp = /(y+)/
  if (yearRegExp.test(fmt) && yearRegExp.exec(fmt)) {
    const $1 = (yearRegExp.exec(fmt)?.[1] || '') as string
    fmt = fmt.replace($1, (d.getFullYear() + '').slice(yearNum - $1.length))
  }
  for (const k in o) {
    const otherRegExp = new RegExp('(' + k + ')')
    if (otherRegExp.test(fmt) && otherRegExp.exec(fmt)) {
      const $1 = (otherRegExp.exec(fmt)?.[1] || '') as string
      fmt = fmt.replace($1, $1.length == 1 ? o[k] : ('00' + o[k]).slice(('' + o[k]).length))
    }
  }
  return fmt
}

/**
 * 格式化日期分隔符
 * @group Date
 * @param {string} date
 * @returns 'yyyy/MM/dd'
 * @example
 * ```更多示例```
 * {@include ../../docs/test/date/formatDateSeparator.md}
 */
export const formatDateSeparator = (date: string) => date.replace(/-/g, '/')

/**
 * 格式化 yyyMMdd 或 yyyyMMddhhmmss 格式日期字符串
 * @group Date
 * @param {string} dateString
 * @returns {Date | null}
 * @example
 * ```更多示例```
 * {@include ../../docs/test/date/parseDateStringWithTime.md}
 */
export const parseDateStringWithTime = (dateString: string = ''): Date | null => {
  const dateRegex = /(\d{4})(\d{2})(\d{2})(?:(\d{2})(\d{2})(\d{2}))?/
  // 匹配第一个日期字符串
  const match = dateString.match(dateRegex)
  if (match) {
    const [, year, month, day, hours, minutes, seconds] = match
    // 将捕获的数据转换成时间对象
    const date = new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hours || 0),
      Number(minutes || 0),
      Number(seconds || 0)
    )
    // 直接返回时间对象
    return date
  }
  return null
}

type UniversalTimeType = Date | number | string | null
/**
 * 通用时间格式化方法
 * @group Date
 * @param {UniversalTimeType} value 允许时间对象、时间字符串、时间戳
 * @param {string} fmt 时间字符串格式
 * @param {string} placeholder 占位符
 * @returns {string}
 * @example
 * ```更多示例```
 * {@include ../../docs/test/date/formatDate.md}
 */
export const formatDate = (value: UniversalTimeType, fmt: string = 'yyyy-MM-dd', placeholder: string = ''): string => {
  if (!value) return placeholder

  // 判断是否是有效时间对象
  let date = value
  if (isValidNumber(value)) {
    date = new Date(value)
  }
  if (isString(value)) {
    // 过滤 - => /
    const stringDate = formatDateSeparator(value)
    // 格式化 yyyMMdd 或 yyyyMMddhhmmss 格式日期字符串
    const parseDate = parseDateStringWithTime(stringDate)
    date = parseDate || new Date(stringDate)
  }
  // 判断是否是有效时间对象
  return isValidDate(date) ? dateFormat(date, fmt) : placeholder
}
