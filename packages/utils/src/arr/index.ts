import { isArray } from '../valid'

export type FlatArray<T> = T extends (infer U)[] ? FlatArray<U> : T

/**
 * 类型判断
 * @group Array
 * @param {unknown} value
 * @returns {string}
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/arr/flattenArray.md}
 */
export const flattenArray = <T>(value: T[]): FlatArray<T>[] =>
  value.reduce<FlatArray<T>[]>(
    (arr, val) => arr.concat(isArray(val) ? (flattenArray(val) as FlatArray<T>[]) : (val as FlatArray<T>)),
    []
  )
