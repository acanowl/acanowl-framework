/**
 * 字符串或数字
 */
export type StrOrNum = string | number

/**
 * 字符串或数字或布尔值
 */
export type StrOrNumOrBool = StrOrNum | boolean

/**
 * 基本类型
 */
export type BaseType = StrOrNumOrBool | null | undefined | symbol | bigint | object

/**
 * 深度部分
 */
export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

/**
 * 深度只读
 */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>
}
