import { expect, test } from 'vitest'

const emptyObject = {}
const validObject = { a: 1 }
const emptyArray = []
const validArray = [1]
const string = 'string'
const number = 1
const boolean = true
const date = new Date()
const regExp = /regExp/
const func = function () {}
const asyncfunc = async function () {}
const nullValue = null
const undefinedValue = undefined

import { isPlainObject } from '../../dist'
test('isPlainObject emptyObject, 返回 true', () => expect(isPlainObject(emptyObject)).toBe(true))
test('isPlainObject validObject, 返回 true', () => expect(isPlainObject(validObject)).toBe(true))
test('isPlainObject validArray, 返回 false', () => expect(isPlainObject(validArray)).toBe(false))

import { isObject } from '../../dist'
test('isObject emptyObject, 返回 true', () => expect(isObject(emptyObject)).toBe(true))
test('isObject validObject, 返回 true', () => expect(isObject(validObject)).toBe(true))
test('isObject validArray, 返回 true', () => expect(isObject(validArray)).toBe(true))
test('isObject date, 返回 true', () => expect(isObject(date)).toBe(true))
test('isObject nullValue, 返回 false', () => expect(isObject(nullValue)).toBe(false))

import { isArray } from '../../dist'
test('isArray emptyArray, 返回 true', () => expect(isArray(emptyArray)).toBe(true))
test('isArray validArray, 返回 true', () => expect(isArray(validArray)).toBe(true))
test('isArray string, 返回 false', () => expect(isArray(string)).toBe(false))

import { isString } from '../../dist'
test('isString string, 返回 true', () => expect(isString(string)).toBe(true))
test('isString number, 返回 false', () => expect(isString(number)).toBe(false))

import { isNumber } from '../../dist'
test('isNumber number, 返回 true', () => expect(isNumber(number)).toBe(true))
test('isNumber string, 返回 false', () => expect(isNumber(string)).toBe(false))

import { isBoolean } from '../../dist'
test('isBoolean boolean, 返回 true', () => expect(isBoolean(boolean)).toBe(true))
test('isBoolean string, 返回 false', () => expect(isBoolean(string)).toBe(false))

import { isFunction } from '../../dist'
test('isFunction func, 返回 true', () => expect(isFunction(func)).toBe(true))
test('isFunction asyncfunc, 返回 true', () => expect(isFunction(asyncfunc)).toBe(true))
test('isFunction nullValue, 返回 false', () => expect(isFunction(nullValue)).toBe(false))

import { isDate } from '../../dist'
test('isDate date, 返回 true', () => expect(isDate(date)).toBe(true))
test('isDate string, 返回 false', () => expect(isDate(string)).toBe(false))

import { isRegExp } from '../../dist'
test('isRegExp regExp, 返回 true', () => expect(isRegExp(regExp)).toBe(true))
test('isRegExp string, 返回 false', () => expect(isRegExp(string)).toBe(false))

import { isDefined } from '../../dist'
test('isDefined regExp, 返回 true', () => expect(isDefined(regExp)).toBe(true))
test('isDefined string, 返回 true', () => expect(isDefined(string)).toBe(true))
test('isDefined nullValue, 返回 false', () => expect(isDefined(nullValue)).toBe(false))
test('isDefined undefinedValue, 返回 false', () => expect(isDefined(undefinedValue)).toBe(false))

import { isNull } from '../../dist'
test('isNull nullValue, 返回 true', () => expect(isNull(nullValue)).toBe(true))
test('isNull undefinedValue, 返回 false', () => expect(isNull(undefinedValue)).toBe(false))
