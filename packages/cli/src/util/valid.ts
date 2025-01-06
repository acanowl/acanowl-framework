import type { GenFn, PlainObject } from '@acanowl/types'

const getObjectType = (obj: unknown) => Object.prototype.toString.call(obj).slice(1, -1).split(' ')[1]

export const isPlainObject = (value: unknown): value is PlainObject => getObjectType(value) === 'Object'

export const isObject = (value: unknown): value is PlainObject | Array<unknown> =>
  typeof value === 'object' && value !== null

export const isArray = (value: unknown): value is Array<unknown> => getObjectType(value) === 'Array'

export const isString = (value: unknown): value is string => getObjectType(value) === 'String'

export const isNumber = (value: unknown): value is number => getObjectType(value) === 'Number'

export const isBoolean = (value: unknown): value is boolean => getObjectType(value) === 'Boolean'

export const isFunction = <T = undefined>(value: unknown): value is GenFn<T> =>
  ['AsyncFunction', 'Function'].indexOf(getObjectType(value)) > -1 || typeof value === 'function'

export const isDate = (value: unknown): value is Date => getObjectType(value) === 'Date'

export const isRegExp = (value: unknown): value is RegExp => getObjectType(value) === 'RegExp'

export const isDefined = <T>(value: T | undefined | null): value is T => value !== null && value !== undefined

export const isNull = (value: unknown): value is null => value === null
