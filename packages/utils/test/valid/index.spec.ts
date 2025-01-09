import { expect, test } from 'vitest'

import { isPlainObject } from '../../dist'
test('isPlainObject emptyObject, 返回 true', () => {
  const emptyObject = {}
  expect(isPlainObject(emptyObject)).toBe(true)
})
test('isPlainObject validObject, 返回 true', () => {
  const validObject = { a: 1 }
  expect(isPlainObject(validObject)).toBe(true)
})
test('isPlainObject validArray, 返回 false', () => {
  const validArray = [1]
  expect(isPlainObject(validArray)).toBe(false)
})

import { isObject } from '../../dist'
test('isObject emptyObject, 返回 true', () => {
  const emptyObject = {}
  expect(isObject(emptyObject)).toBe(true)
})
test('isObject validObject, 返回 true', () => {
  const validObject = { a: 1 }
  expect(isObject(validObject)).toBe(true)
})
test('isObject validArray, 返回 true', () => {
  const validArray = [1]
  expect(isObject(validArray)).toBe(true)
})
test('isObject date, 返回 false', () => {
  const date = new Date()
  expect(isObject(date)).toBe(false)
})
test('isObject nullValue, 返回 false', () => {
  const nullValue = null
  expect(isObject(nullValue)).toBe(false)
})

import { isArray } from '../../dist'
test('isArray emptyArray, 返回 true', () => {
  const emptyArray = []
  expect(isArray(emptyArray)).toBe(true)
})
test('isArray validArray, 返回 true', () => {
  const validArray = [1]
  expect(isArray(validArray)).toBe(true)
})
test('isArray string, 返回 false', () => {
  const string = 'string'
  expect(isArray(string)).toBe(false)
})

import { isString } from '../../dist'
test('isString string, 返回 true', () => {
  const string = 'string'
  expect(isString(string)).toBe(true)
})
test('isString number, 返回 false', () => {
  const number = 1
  expect(isString(number)).toBe(false)
})

import { isNumber } from '../../dist'
test('isNumber number, 返回 true', () => {
  const number = 1
  expect(isNumber(number)).toBe(true)
})
test('isNumber string, 返回 false', () => {
  const string = 'string'
  expect(isNumber(string)).toBe(false)
})

import { isBoolean } from '../../dist'
test('isBoolean boolean, 返回 true', () => {
  const boolean = true
  expect(isBoolean(boolean)).toBe(true)
})
test('isBoolean string, 返回 false', () => {
  const string = 'string'
  expect(isBoolean(string)).toBe(false)
})

import { isFunction } from '../../dist'
test('isFunction func, 返回 true', () => {
  const func = function () {}
  expect(isFunction(func)).toBe(true)
})
test('isFunction asyncfunc, 返回 true', () => {
  const asyncfunc = async function () {}
  expect(isFunction(asyncfunc)).toBe(true)
})
test('isFunction nullValue, 返回 false', () => {
  const nullValue = null
  expect(isFunction(nullValue)).toBe(false)
})

import { isDate } from '../../dist'
test('isDate date, 返回 true', () => {
  const date = new Date()
  expect(isDate(date)).toBe(true)
})
test('isDate string, 返回 false', () => {
  const string = 'string'
  expect(isDate(string)).toBe(false)
})

import { isRegExp } from '../../dist'
test('isRegExp regExp, 返回 true', () => {
  const regExp = /regExp/
  expect(isRegExp(regExp)).toBe(true)
})
test('isRegExp string, 返回 false', () => {
  const string = 'string'
  expect(isRegExp(string)).toBe(false)
})

import { isDefined } from '../../dist'
test('isDefined regExp, 返回 true', () => {
  const regExp = /regExp/
  expect(isDefined(regExp)).toBe(true)
})
test('isDefined string, 返回 true', () => {
  const string = 'string'
  expect(isDefined(string)).toBe(true)
})
test('isDefined nullValue, 返回 false', () => {
  const nullValue = null
  expect(isDefined(nullValue)).toBe(false)
})
test('isDefined undefinedValue, 返回 false', () => {
  const undefinedValue = undefined
  expect(isDefined(undefinedValue)).toBe(false)
})

import { isNull } from '../../dist'
test('isNull nullValue, 返回 true', () => {
  const nullValue = null
  expect(isNull(nullValue)).toBe(true)
})
test('isNull undefinedValue, 返回 false', () => {
  const undefinedValue = undefined
  expect(isNull(undefinedValue)).toBe(false)
})
