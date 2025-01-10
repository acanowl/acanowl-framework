import { expect, test } from 'vitest'

import { isPlainObject } from '../../dist'
test('#isPlainObject# isPlainObject emptyObject, 返回 true', () => {
  const emptyObject = {}
  expect(isPlainObject(emptyObject)).toBe(true)
})
test('#isPlainObject# isPlainObject validObject, 返回 true', () => {
  const validObject = { a: 1 }
  expect(isPlainObject(validObject)).toBe(true)
})
test('#isPlainObject# isPlainObject validArray, 返回 false', () => {
  const validArray = [1]
  expect(isPlainObject(validArray)).toBe(false)
})

import { isObject } from '../../dist'
test('#isObject# isObject emptyObject, 返回 true', () => {
  const emptyObject = {}
  expect(isObject(emptyObject)).toBe(true)
})
test('#isObject# isObject validObject, 返回 true', () => {
  const validObject = { a: 1 }
  expect(isObject(validObject)).toBe(true)
})
test('#isObject# isObject validArray, 返回 true', () => {
  const validArray = [1]
  expect(isObject(validArray)).toBe(true)
})
test('#isObject# isObject date, 返回 false', () => {
  const date = new Date()
  expect(isObject(date)).toBe(false)
})
test('#isObject# isObject nullValue, 返回 false', () => {
  const nullValue = null
  expect(isObject(nullValue)).toBe(false)
})

import { isArray } from '../../dist'
test('#isArray# isArray emptyArray, 返回 true', () => {
  const emptyArray = []
  expect(isArray(emptyArray)).toBe(true)
})
test('#isArray# isArray validArray, 返回 true', () => {
  const validArray = [1]
  expect(isArray(validArray)).toBe(true)
})
test('#isArray# isArray string, 返回 false', () => {
  const string = 'string'
  expect(isArray(string)).toBe(false)
})

import { isString } from '../../dist'
test('#isString# isString string, 返回 true', () => {
  const string = 'string'
  expect(isString(string)).toBe(true)
})
test('#isString# isString number, 返回 false', () => {
  const number = 1
  expect(isString(number)).toBe(false)
})

import { isNumber } from '../../dist'
test('#isNumber# isNumber number, 返回 true', () => {
  const number = 1
  expect(isNumber(number)).toBe(true)
})
test('#isNumber# isNumber string, 返回 false', () => {
  const string = 'string'
  expect(isNumber(string)).toBe(false)
})

import { isBoolean } from '../../dist'
test('#isBoolean# isBoolean boolean, 返回 true', () => {
  const boolean = true
  expect(isBoolean(boolean)).toBe(true)
})
test('#isBoolean# isBoolean string, 返回 false', () => {
  const string = 'string'
  expect(isBoolean(string)).toBe(false)
})

import { isFunction } from '../../dist'
test('#isFunction# isFunction func, 返回 true', () => {
  const func = function () {}
  expect(isFunction(func)).toBe(true)
})
test('#isFunction# isFunction asyncfunc, 返回 true', () => {
  const asyncfunc = async function () {}
  expect(isFunction(asyncfunc)).toBe(true)
})
test('#isFunction# isFunction nullValue, 返回 false', () => {
  const nullValue = null
  expect(isFunction(nullValue)).toBe(false)
})

import { isDate } from '../../dist'
test('#isDate# isDate date, 返回 true', () => {
  const date = new Date()
  expect(isDate(date)).toBe(true)
})
test('#isDate# isDate string, 返回 false', () => {
  const string = 'string'
  expect(isDate(string)).toBe(false)
})

import { isRegExp } from '../../dist'
test('#isRegExp# isRegExp regExp, 返回 true', () => {
  const regExp = /regExp/
  expect(isRegExp(regExp)).toBe(true)
})
test('#isRegExp# isRegExp string, 返回 false', () => {
  const string = 'string'
  expect(isRegExp(string)).toBe(false)
})

import { isDefined } from '../../dist'
test('#isDefined# isDefined regExp, 返回 true', () => {
  const regExp = /regExp/
  expect(isDefined(regExp)).toBe(true)
})
test('#isDefined# isDefined string, 返回 true', () => {
  const string = 'string'
  expect(isDefined(string)).toBe(true)
})
test('#isDefined# isDefined nullValue, 返回 false', () => {
  const nullValue = null
  expect(isDefined(nullValue)).toBe(false)
})
test('#isDefined# isDefined undefinedValue, 返回 false', () => {
  const undefinedValue = undefined
  expect(isDefined(undefinedValue)).toBe(false)
})

import { isNull } from '../../dist'
test('#isNull# isNull nullValue, 返回 true', () => {
  const nullValue = null
  expect(isNull(nullValue)).toBe(true)
})
test('#isNull# isNull undefinedValue, 返回 false', () => {
  const undefinedValue = undefined
  expect(isNull(undefinedValue)).toBe(false)
})
