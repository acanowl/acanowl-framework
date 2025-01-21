import { describe, expect, test } from 'vitest'

import { dateFormat } from '../../dist'
describe('dateFormat', () => {
  test('有效时间对象', () => {
    const value = new Date('2024/01/02')
    expect(dateFormat(value)).toBe('2024-01-02')
  })
  test('无效时间对象', () => {
    const value = new Date('error')
    expect(dateFormat(value)).toBe('')
  })
  test('格式化', () => {
    const value = new Date('2024/01/02')
    const fmt: string = 'yyyy年MM月'
    expect(dateFormat(value, fmt)).toBe('2024年01月')
  })
})

import { formatDateSeparator } from '../../dist'
describe('formatDateSeparator', () => {
  test('用例1', () => {
    const value: string = '2024-01-02'
    expect(formatDateSeparator(value)).toBe('2024/01/02')
  })
  test('用例2', () => {
    const value: string = '2024-01-02 12:11:23'
    expect(formatDateSeparator(value)).toBe('2024/01/02 12:11:23')
  })
  test('用例3', () => {
    const value: string = '20240102'
    expect(formatDateSeparator(value)).toBe('20240102')
  })
})

import { parseDateStringWithTime } from '../../dist'
describe('parseDateStringWithTime', () => {
  test('用例1', () => {
    const value: string = '20240102'
    expect(parseDateStringWithTime(value)).toStrictEqual(new Date('2024/01/02'))
  })
  test('用例2', () => {
    const value: string = '20240102121123'
    expect(parseDateStringWithTime(value)).toStrictEqual(new Date('2024/01/02 12:11:23'))
  })
  test('用例3', () => {
    const value: string = '2024'
    expect(parseDateStringWithTime(value)).toBe(null)
  })
})

import { isTimestamp } from '../../dist'
describe('isTimestamp', () => {
  test('用例1-字符串时间戳', () => {
    const value: string = '1737440001365'
    expect(isTimestamp(value)).toBe(true)
  })
  test('用例2-时间戳', () => {
    const value: number = 1737440001365
    expect(isTimestamp(value)).toBe(true)
  })
  test('用例3-字符串', () => {
    const value: string = '20240102121123'
    expect(isTimestamp(value)).toBe(false)
  })
})

import { formatDate } from '../../dist'
describe('formatDate', () => {
  test('用例1-字符串', () => {
    const value: string = '20240102121123'
    expect(formatDate(value)).toStrictEqual('2024-01-02')
  })
  test('用例2-字符串格式化', () => {
    const value: string = '20240102121123'
    const fmt: string = 'yyyy年MM月dd日 hh时mm分ss秒'
    expect(formatDate(value, fmt)).toStrictEqual('2024年01月02日 12时11分23秒')
  })
  test('用例3-字符串时间戳', () => {
    const value: string = '1737440001365'
    expect(formatDate(value)).toBe('2025-01-21')
  })
  test('用例4-时间戳', () => {
    const value: number = 1737440001365
    expect(formatDate(value)).toBe('2025-01-21')
  })
  test('用例5-有效时间对象', () => {
    const value = new Date('2024/01/02')
    expect(formatDate(value)).toBe('2024-01-02')
  })
  test('用例6-无效时间对象', () => {
    const value = new Date('error')
    expect(formatDate(value)).toBe('')
  })
})
