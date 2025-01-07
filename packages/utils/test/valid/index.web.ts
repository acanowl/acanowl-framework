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
console.log('isPlainObject(emptyObject) === true', isPlainObject(emptyObject)) // true
console.log('isPlainObject(validObject) === true', isPlainObject(validObject)) // true
console.log('isPlainObject(validArray) === false', isPlainObject(validArray)) // false

import { isObject } from '../../dist'
console.log('isObject(emptyObject) === true', isObject(emptyObject)) // true
console.log('isObject(validObject) === true', isObject(validObject)) // true
console.log('isObject(validArray) === true', isObject(validArray)) // true
console.log('isObject(date) === true', isObject(date)) // true
console.log('isObject(nullValue) === false', isObject(nullValue)) // false

import { isArray } from '../../dist'
console.log('isArray(emptyArray) === true', isArray(emptyArray)) // true
console.log('isArray(validArray) === true', isArray(validArray)) // true
console.log('isArray(string) === false', isArray(string)) // false

import { isString } from '../../dist'
console.log('isString(string) === true', isString(string)) // true
console.log('isString(number) === false', isString(number)) // false

import { isNumber } from '../../dist'
console.log('isNumber(number) === true', isNumber(number)) // true
console.log('isNumber(string) === false', isNumber(string)) // false

import { isBoolean } from '../../dist'
console.log('isBoolean(boolean) === true', isBoolean(boolean)) // true
console.log('isBoolean(string) === false', isBoolean(string)) // false

import { isFunction } from '../../dist'
console.log('isFunction(func) === true', isFunction(func)) // true
console.log('isFunction(asyncfunc) === true', isFunction(asyncfunc)) // true
console.log('isFunction(nullValue) === false', isFunction(nullValue)) // false

import { isDate } from '../../dist'
console.log('isDate(date) === true', isDate(date)) // true
console.log('isDate(string) === false', isDate(string)) // false

import { isRegExp } from '../../dist'
console.log('isRegExp(regExp) === true', isRegExp(regExp)) // true
console.log('isRegExp(string) === false', isRegExp(string)) // false

import { isDefined } from '../../dist'
console.log('isDefined(regExp) === true', isDefined(regExp)) // true
console.log('isDefined(string) === true', isDefined(string)) // true
console.log('isDefined(nullValue) === false', isDefined(nullValue)) // false
console.log('isDefined(undefinedValue) === false', isDefined(undefinedValue)) // false

import { isNull } from '../../dist'
console.log('isNull(nullValue) === true', isNull(nullValue)) // true
console.log('isNull(undefinedValue) === false', isNull(undefinedValue)) // false
