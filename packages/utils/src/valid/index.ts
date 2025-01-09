import type { GenFn, PlainObject } from '@acanowl/types'

const getObjectType = (obj: unknown) => Object.prototype.toString.call(obj).slice(1, -1).split(' ')[1]

/**
 * 是否是纯对象
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```ts
 * isPlainObject({})
 * outPut => true
 *
 * isPlainObject([])
 * outPut => false
 * ```
 */
export const isPlainObject = (value: unknown): value is PlainObject => getObjectType(value) === 'Object'

/**
 * 是否是数组
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```ts
 * isArray([])
 * outPut => true
 *
 * isArray({})
 * outPut => false
 * ```
 */
export const isArray = (value: unknown): value is Array<unknown> => getObjectType(value) === 'Array'

/**
 * 是否是对象(不包括null, Date, RegExp)
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```ts
 * isObject({})
 * outPut => true
 *
 * isObject([])
 * outPut => true
 *
 * isObject(null)
 * outPut => false
 *
 * isObject(new Date())
 * outPut => false
 * ```
 */
export const isObject = (value: unknown): value is PlainObject | Array<unknown> =>
  isPlainObject(value) || isArray(value)

/**
 * 是否是字符串
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```ts
 * isString('string')
 * outPut => true
 *
 * isString(1)
 * outPut => false
 * ```
 */
export const isString = (value: unknown): value is string => getObjectType(value) === 'String'

/**
 * 是否是数字
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```ts
 * isNumber(1)
 * outPut => true
 *
 * isNumber('1')
 * outPut => false
 * ```
 */
export const isNumber = (value: unknown): value is number => getObjectType(value) === 'Number'

/**
 * 是否是布尔值
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```ts
 * isBoolean(true)
 * outPut => true
 *
 * isBoolean(1)
 * outPut => false
 * ```
 */
export const isBoolean = (value: unknown): value is boolean => getObjectType(value) === 'Boolean'

/**
 * 是否是函数(包括AsyncFunction)
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```ts
 * isFunction(() => {})
 * outPut => true
 *
 * isFunction(async () => {})
 * outPut => true
 *
 * isFunction(1)
 * outPut => false
 * ```
 */
export const isFunction = <T = undefined>(value: unknown): value is GenFn<T> =>
  ['AsyncFunction', 'Function'].indexOf(getObjectType(value)) > -1 || typeof value === 'function'

/**
 * 是否是日期对象
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```ts
 * isDate(new Date())
 * outPut => true
 *
 * isDate({})
 * outPut => false
 * ```
 */
export const isDate = (value: unknown): value is Date => getObjectType(value) === 'Date'

/**
 * 是否是正则表达式
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```ts
 * isRegExp(/test/)
 * outPut => true
 *
 * isRegExp({})
 * outPut => false
 * ```
 */
export const isRegExp = (value: unknown): value is RegExp => getObjectType(value) === 'RegExp'

/**
 * 是否定义(不为null, undefined)
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```ts
 * isDefined(1)
 * outPut => true
 *
 * isDefined(null)
 * outPut => false
 *
 * isDefined(undefined)
 * outPut => false
 * ```
 */
export const isDefined = <T>(value: T | undefined | null): value is T => value !== null && value !== undefined

/**
 * 是否是null
 * @group Valid
 * @param {unknown} value
 * @returns {boolean} true | false
 * @example
 * ```ts
 * isNull(null)
 * outPut => true
 *
 * isNull(undefined)
 * outPut => false
 * ```
 */
export const isNull = (value: unknown): value is null => value === null
