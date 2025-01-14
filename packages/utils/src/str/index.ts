import { isDefined, isNonZeroNumber } from '@/valid'

/**
 * 获取小数位长度
 * @group String
 * @param {unknown} str 任意值
 * @param {unknown} n 小数位长度
 * @returns {number}
 * @example
 * ```更多示例```
 * {@include ../../docs/test/str/getDecimalLength.md}
 */
export const getDecimalLength = (str: unknown, n: unknown): number => {
  if (!isDefined(str)) return 0
  const [, decimal = ''] = String(str).split('.')
  return isNonZeroNumber(n) ? n : decimal.length
}
