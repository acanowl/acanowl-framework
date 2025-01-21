import { describe, expect, test } from 'vitest'

import { isPlainObject } from '../../dist'
describe('isPlainObject', () => {
  test('emptyObject', () => {
    const emptyObject = {}
    expect(isPlainObject(emptyObject)).toBe(true)
  })
  test('validObject', () => {
    const validObject = { a: 1 }
    expect(isPlainObject(validObject)).toBe(true)
  })
  test('validArray', () => {
    const validArray = [1]
    expect(isPlainObject(validArray)).toBe(false)
  })
})

import { isObject } from '../../dist'
describe('isObject', () => {
  test('emptyObject', () => {
    const emptyObject = {}
    expect(isObject(emptyObject)).toBe(true)
  })
  test('validObject', () => {
    const validObject = { a: 1 }
    expect(isObject(validObject)).toBe(true)
  })
  test('validArray', () => {
    const validArray = [1]
    expect(isObject(validArray)).toBe(true)
  })
  test('date', () => {
    const date = new Date()
    expect(isObject(date)).toBe(false)
  })
  test('nullValue', () => {
    const nullValue = null
    expect(isObject(nullValue)).toBe(false)
  })
})

import { isArray } from '../../dist'
describe('isArray', () => {
  test('emptyArray', () => {
    const emptyArray: unknown = []
    expect(isArray(emptyArray)).toBe(true)
  })
  test('validArray', () => {
    const validArray = [1]
    expect(isArray(validArray)).toBe(true)
  })
  test('string', () => {
    const string = 'string'
    expect(isArray(string)).toBe(false)
  })
})

import { isString } from '../../dist'
describe('isString', () => {
  test('string', () => {
    const string = 'string'
    expect(isString(string)).toBe(true)
  })
  test('number', () => {
    const number = 1
    expect(isString(number)).toBe(false)
  })
})

import { isNumber } from '../../dist'
describe('isNumber', () => {
  test('number', () => {
    const number = 1
    expect(isNumber(number)).toBe(true)
  })
  test('string', () => {
    const string = 'string'
    expect(isNumber(string)).toBe(false)
  })
})

import { isBoolean } from '../../dist'
describe('isBoolean', () => {
  test('boolean', () => {
    const boolean = true
    expect(isBoolean(boolean)).toBe(true)
  })
  test('string', () => {
    const string = 'string'
    expect(isBoolean(string)).toBe(false)
  })
})

import { isFunction } from '../../dist'
describe('isFunction', () => {
  test('func', () => {
    const func = function () {}
    expect(isFunction(func)).toBe(true)
  })
  test('asyncfunc', () => {
    const asyncfunc = async function () {}
    expect(isFunction(asyncfunc)).toBe(true)
  })
  test('nullValue', () => {
    const nullValue = null
    expect(isFunction(nullValue)).toBe(false)
  })
})

import { isDate } from '../../dist'
describe('isDate', () => {
  test('date', () => {
    const date = new Date()
    expect(isDate(date)).toBe(true)
  })
  test('string', () => {
    const string = 'string'
    expect(isDate(string)).toBe(false)
  })
})

import { isRegExp } from '../../dist'
describe('isRegExp', () => {
  test('regExp', () => {
    const regExp = /regExp/
    expect(isRegExp(regExp)).toBe(true)
  })
  test('string', () => {
    const string = 'string'
    expect(isRegExp(string)).toBe(false)
  })
})

import { isDefined } from '../../dist'
describe('isDefined', () => {
  test('regExp', () => {
    const regExp = /regExp/
    expect(isDefined(regExp)).toBe(true)
  })
  test('string', () => {
    const string = 'string'
    expect(isDefined(string)).toBe(true)
  })
  test('nullValue', () => {
    const nullValue = null
    expect(isDefined(nullValue)).toBe(false)
  })
  test('undefinedValue', () => {
    const undefinedValue = undefined
    expect(isDefined(undefinedValue)).toBe(false)
  })
})

import { isNull } from '../../dist'
describe('isNull', () => {
  test('nullValue', () => {
    const nullValue = null
    expect(isNull(nullValue)).toBe(true)
  })
  test('undefinedValue', () => {
    const undefinedValue = undefined
    expect(isNull(undefinedValue)).toBe(false)
  })
})
