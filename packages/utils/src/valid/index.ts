import type { GenFn, PlainObject } from '@acanowl/types'

const getObjectType = (obj: unknown) => Object.prototype.toString.call(obj).slice(1, -1).split(' ')[1]

/**
 * 是否是纯对象
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/valid/isPlainObject.md}
 */
export const isPlainObject = (value: unknown): value is PlainObject => getObjectType(value) === 'Object'

/**
 * 是否是数组
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/valid/isArray.md}
 */
export const isArray = (value: unknown): value is Array<unknown> => getObjectType(value) === 'Array'

/**
 * 是否是对象(不包括null, Date, RegExp)
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/valid/isObject.md}
 */
export const isObject = (value: unknown): value is PlainObject | Array<unknown> =>
  isPlainObject(value) || isArray(value)

/**
 * 是否是字符串
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/valid/isString.md}
 */
export const isString = (value: unknown): value is string => getObjectType(value) === 'String'

/**
 * 是否是数字
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/valid/isNumber.md}
 */
export const isNumber = (value: unknown): value is number => getObjectType(value) === 'Number'

/**
 * 是否是有效数字
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```更多示例```
 * {../../../../docs/test/utils/valid/isValidNumber.md}
 */
export const isValidNumber = (value: unknown): value is number => isNumber(value) && !isNaN(value)

/**
 * 是否是非0数字
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```更多示例```
 * {../../../../docs/test/utils/valid/isNonZeroNumber.md}
 */
export const isNonZeroNumber = (value: unknown): value is number => isValidNumber(value) && value === 0

/**
 * 是否是布尔值
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/valid/isBoolean.md}
 */
export const isBoolean = (value: unknown): value is boolean => getObjectType(value) === 'Boolean'

/**
 * 是否是函数(包括AsyncFunction)
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/valid/isFunction.md}
 */
export const isFunction = <T = undefined>(value: unknown): value is GenFn<T> =>
  ['AsyncFunction', 'Function'].indexOf(getObjectType(value)) > -1 || typeof value === 'function'

/**
 * 是否是日期对象
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/valid/isDate.md}
 */
export const isDate = (value: unknown): value is Date => getObjectType(value) === 'Date'

/**
 * 是否是有效日期对象
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```更多示例```
 * {../../../../docs/test/utils/valid/isValidDate.md}
 */
export const isValidDate = (value: unknown): value is Date => isDate(value) && !isNaN(value.getTime())

/**
 * 是否是正则表达式
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/valid/isRegExp.md}
 */
export const isRegExp = (value: unknown): value is RegExp => getObjectType(value) === 'RegExp'

/**
 * 是否定义(不为null, undefined)
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/valid/isDefined.md}
 */
export const isDefined = <T>(value: T | undefined | null): value is T => value !== null && value !== undefined

/**
 * 是否是null
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```更多示例```
 * {@include ../../../../docs/test/utils/valid/isNull.md}
 */
export const isNull = (value: unknown): value is null => value === null
