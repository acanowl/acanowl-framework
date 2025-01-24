import { describe, expect, test } from 'vitest'

import { getDecimalLength } from '../../dist'
describe('getDecimalLength', () => {
  test('用例1-数字', () => {
    const value = 12.334
    expect(getDecimalLength(value)).toBe(3)
  })
  test('用例2-数字', () => {
    const value = 12.3
    expect(getDecimalLength(value, 2)).toBe(2)
  })
  test('用例3-字符串', () => {
    const value = '12.345'
    expect(getDecimalLength(value, 1)).toBe(1)
  })
  test('用例4-null', () => {
    const value = null
    expect(getDecimalLength(value, 3)).toBe(0)
  })
  test('用例5-NaN', () => {
    const value = NaN
    expect(getDecimalLength(value, 3)).toBe(0)
  })
  test('用例6-无效字符串', () => {
    const value = ''
    expect(getDecimalLength(value, 3)).toBe(0)
  })
  test('用例7-空格', () => {
    const value = ''
    expect(getDecimalLength(value, 3)).toBe(0)
  })
})

import { getUrlParams } from '../../dist'
describe('getUrlParams', () => {
  test('用例1-无参数', () => {
    const value = 'https://example.com/'
    expect(getUrlParams(value)).toEqual({})
  })
  test('用例2-hash模式', () => {
    const value = 'https://example.com/#/list?page=1&size=10'
    expect(getUrlParams(value)).toEqual({ page: '1', size: '10' })
  })
  test('用例3-history模式', () => {
    const value = 'https://example.com/list?page=1&size=10'
    expect(getUrlParams(value)).toEqual({ page: '1', size: '10' })
  })
  test('用例4-异常地址', () => {
    const value = 'https://example.com/#/list?page=1&size=10?sort=id&test&filter='
    expect(getUrlParams(value)).toEqual({ page: '1', size: '10', sort: 'id', filter: '' })
  })
})

import { getUrlParamsByKey } from '../../dist'
describe('getUrlParamsByKey', () => {
  test('用例1-无参数', () => {
    const value = 'https://example.com/'
    expect(getUrlParamsByKey(value, 'page')).toBe('')
  })
  test('用例2-有效key', () => {
    const value = 'https://example.com/#/list?page=1&size=10'
    expect(getUrlParamsByKey(value, 'page')).toBe('1')
  })
  test('用例3-无效key', () => {
    const value = 'https://example.com/list?page=1&size=10'
    expect(getUrlParamsByKey(value, 'sort')).toBe('')
  })
  test('用例4-异常地址', () => {
    const value = 'https://example.com/#/list?page=1&size=10?sort=id&test&filter='
    expect(getUrlParamsByKey(value, 'sort')).toBe('id')
  })
})

import { roundNumber } from '../../dist'
describe('roundNumber', () => {
  test('用例1-无小数位', () => {
    const value: string = '0.495'
    expect(roundNumber(value)).toBe('0.495')
  })
  test('用例2-小数位长度为0', () => {
    const value: string = '10.50'
    expect(roundNumber(value, 0)).toBe('11')
  })
  test('用例3-数字、小数位长度为2', () => {
    const value: number = 0.495
    expect(roundNumber(value, 2)).toBe('0.50')
  })
  test('用例4-小数位长度为4', () => {
    const value: string = '0.495'
    expect(roundNumber(value, 4)).toBe('0.4950')
  })
  test('用例5-无效数据', () => {
    const value = null
    expect(roundNumber(value, 3)).toBe('')
  })
})

import { currency } from '../../dist'
describe('currency', () => {
  test('用例1-无小数位', () => {
    const value: string = '10000.495'
    expect(currency(value)).toBe('10,000.495')
  })
  test('用例2-小数位长度为0', () => {
    const value: string = '10000.495'
    expect(currency(value, 0)).toBe('10,000')
  })
  test('用例3-负数、小数位长度为2', () => {
    const value: number = -10203040.495
    expect(currency(value, 2)).toBe('-10,203,040.50')
  })
})
