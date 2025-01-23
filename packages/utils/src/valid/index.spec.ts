import { describe, expect, test } from 'vitest'

import { getObjectType } from '../../dist'
describe('getObjectType', () => {
  test('用例1-对象', () => {
    const value = { a: 1 }
    expect(getObjectType(value)).toBe('Object')
  })
  test('用例2-数组', () => {
    const value = [1]
    expect(getObjectType(value)).toBe('Array')
  })
  test('用例3-Null', () => {
    const value = null
    expect(getObjectType(value)).toBe('Null')
  })
  test('用例4-字符串', () => {
    const value: string = 'string'
    expect(getObjectType(value)).toBe('String')
  })
  test('用例5-数字', () => {
    const value: number = 1
    expect(getObjectType(value)).toBe('Number')
  })
})

import { isPlainObject } from '../../dist'
describe('isPlainObject', () => {
  test('用例1-空对象', () => {
    const value = {}
    expect(isPlainObject(value)).toBe(true)
  })
  test('用例2-有效对象', () => {
    const value = { a: 1 }
    expect(isPlainObject(value)).toBe(true)
  })
  test('用例3-有效数组', () => {
    const value = [1]
    expect(isPlainObject(value)).toBe(false)
  })
})

import { isObject } from '../../dist'
describe('isObject', () => {
  test('用例1-空对象', () => {
    const value = {}
    expect(isObject(value)).toBe(true)
  })
  test('用例2-有效对象', () => {
    const value = { a: 1 }
    expect(isObject(value)).toBe(true)
  })
  test('用例3-有效数组', () => {
    const value = [1]
    expect(isObject(value)).toBe(true)
  })
  test('用例4-有效时间对象', () => {
    const value = new Date()
    expect(isObject(value)).toBe(false)
  })
  test('用例-Null', () => {
    const value = null
    expect(isObject(value)).toBe(false)
  })
})

import { isArray } from '../../dist'
describe('isArray', () => {
  test('用例1-空数组', () => {
    const value: unknown = []
    expect(isArray(value)).toBe(true)
  })
  test('用例2-有效数组', () => {
    const value = [1]
    expect(isArray(value)).toBe(true)
  })
  test('用例3-有效字符串', () => {
    const string: string = 'string'
    expect(isArray(string)).toBe(false)
  })
})

import { isString } from '../../dist'
describe('isString', () => {
  test('用例1-有效字符串', () => {
    const value: string = 'string'
    expect(isString(value)).toBe(true)
  })
  test('用例2-无效字符串', () => {
    const value: string = ''
    expect(isString(value)).toBe(true)
  })
  test('用例3-有效数字', () => {
    const value: number = 1
    expect(isString(value)).toBe(false)
  })
})

import { isValidString } from '../../dist'
describe('isValidString', () => {
  test('用例1-有效字符串', () => {
    const value = 'string'
    expect(isValidString(value)).toBe(true)
  })
  test('用例2-无效字符串', () => {
    const value = ''
    expect(isValidString(value)).toBe(false)
  })
  test('用例3-空格字符串', () => {
    const value = '  '
    expect(isValidString(value)).toBe(false)
  })
  test('用例4-数字', () => {
    const value = 1
    expect(isValidString(value)).toBe(false)
  })
})

import { isNumber } from '../../dist'
describe('isNumber', () => {
  test('用例1-有效数字', () => {
    const value: number = 1
    expect(isNumber(value)).toBe(true)
  })
  test('用例2-无效数字NaN', () => {
    const value = NaN
    expect(isNumber(value)).toBe(true)
  })
  test('用例3-数字0', () => {
    const value: number = 0
    expect(isNumber(value)).toBe(true)
  })
  test('用例4-有效字符串', () => {
    const value: string = 'string'
    expect(isNumber(value)).toBe(false)
  })
})

import { isValidNumber } from '../../dist'
describe('isValidNumber', () => {
  test('用例1-有效数字', () => {
    const value: number = 1
    expect(isValidNumber(value)).toBe(true)
  })
  test('用例2-无效数字NaN', () => {
    const value = NaN
    expect(isValidNumber(value)).toBe(false)
  })
  test('用例3-数字0', () => {
    const value: number = 0
    expect(isValidNumber(value)).toBe(true)
  })
  test('用例4-有效字符串', () => {
    const value: string = 'string'
    expect(isValidNumber(value)).toBe(false)
  })
})

import { isNonZeroNumber } from '../../dist'
describe('isNonZeroNumber', () => {
  test('用例1-有效数字', () => {
    const value: number = 1
    expect(isNonZeroNumber(value)).toBe(true)
  })
  test('用例2-无效数字NaN', () => {
    const value = NaN
    expect(isNonZeroNumber(value)).toBe(false)
  })
  test('用例3-数字0', () => {
    const value: number = 0
    expect(isNonZeroNumber(value)).toBe(false)
  })
  test('用例4-有效字符串', () => {
    const value: string = 'string'
    expect(isNonZeroNumber(value)).toBe(false)
  })
})

import { isBoolean } from '../../dist'
describe('isBoolean', () => {
  test('用例1-布尔值', () => {
    const value = true
    expect(isBoolean(value)).toBe(true)
  })
  test('用例2-有效字符串', () => {
    const value: string = 'string'
    expect(isBoolean(value)).toBe(false)
  })
})

import { isFunction } from '../../dist'
describe('isFunction', () => {
  test('用例1-普通函数', () => {
    const value = function () {}
    expect(isFunction(value)).toBe(true)
  })
  test('用例2-异步函数', () => {
    const value = async function () {}
    expect(isFunction(value)).toBe(true)
  })
  test('用例3-Null', () => {
    const value = null
    expect(isFunction(value)).toBe(false)
  })
})

import { isDate } from '../../dist'
describe('isDate', () => {
  test('用例1-有效时间对象', () => {
    const value = new Date()
    expect(isDate(value)).toBe(true)
  })
  test('用例2-无效时间对象', () => {
    const value = new Date('error')
    expect(isDate(value)).toBe(true)
  })
  test('用例3-有效字符串', () => {
    const value: string = 'string'
    expect(isDate(value)).toBe(false)
  })
})

import { isValidDate } from '../../dist'
describe('isValidDate', () => {
  test('用例1-有效时间对象', () => {
    const value = new Date()
    expect(isValidDate(value)).toBe(true)
  })
  test('用例2-无效时间对象', () => {
    const value = new Date('error')
    expect(isValidDate(value)).toBe(false)
  })
  test('用例3-有效字符串', () => {
    const value: string = 'string'
    expect(isValidDate(value)).toBe(false)
  })
})

import { isRegExp } from '../../dist'
describe('isRegExp', () => {
  test('用例1-正则', () => {
    const value = /regExp/
    expect(isRegExp(value)).toBe(true)
  })
  test('用例2-有效字符串', () => {
    const value: string = 'string'
    expect(isRegExp(value)).toBe(false)
  })
})

import { isDefined } from '../../dist'
describe('isDefined', () => {
  test('用例1-regExp', () => {
    const value = /regExp/
    expect(isDefined(value)).toBe(true)
  })
  test('用例2-string', () => {
    const value: string = 'string'
    expect(isDefined(value)).toBe(true)
  })
  test('用例3-Null', () => {
    const value = null
    expect(isDefined(value)).toBe(false)
  })
  test('用例4-Undefined', () => {
    const value = undefined
    expect(isDefined(value)).toBe(false)
  })
})

import { isNull } from '../../dist'
describe('isNull', () => {
  test('用例1-Null', () => {
    const value = null
    expect(isNull(value)).toBe(true)
  })
  test('用例2-Undefined', () => {
    const value = undefined
    expect(isNull(value)).toBe(false)
  })
})

import { hasKey } from '../../dist'
describe('hasKey', () => {
  test('用例1-空对象', () => {
    const value = {}
    const key = 'key'
    expect(hasKey(value, key)).toBe(false)
  })
  test('用例2-存在有效对象内', () => {
    const value = { key: '1' }
    const key = 'key'
    expect(hasKey(value, key)).toBe(true)
  })
  test('用例3-不存在有效对象内', () => {
    const value = { key: '1' }
    const key = 'page'
    expect(hasKey(value, key)).toBe(false)
  })
})
