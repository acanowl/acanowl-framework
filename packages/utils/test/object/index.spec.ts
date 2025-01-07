import { expect, test } from 'vitest'
import { deepClone, deepMerge } from '../../dist'

const objectValue1 = { a: 1, b: { c: 2 }, d: [1, 2], e: 'hello' }
const objectValue2 = { b: { f: 3 }, d: [3, 4], e: 'world', g: true }

test('deepClone objectValue1', () =>
  expect(deepClone(objectValue1)).toStrictEqual({ a: 1, b: { c: 2 }, d: [1, 2], e: 'hello' }))
test('deepMerge objectValue2', () =>
  expect(deepMerge(objectValue1, objectValue2)).toStrictEqual({
    a: 1,
    b: { c: 2, f: 3 },
    d: [1, 2, 3, 4],
    e: 'world',
    g: true
  }))

const arrayValue1 = [{ a: 1, b: { c: 2 }, d: [5, 2], e: 'hello' }]
const arrayValue2 = [
  { b: { f: 3 }, d: [3, 4], e: 'world', g: false },
  { a: 1, b: { c: 2 }, d: [1, 2], e: 'hello' }
]

test('deepClone arrayValue1', () =>
  expect(deepClone(arrayValue1)).toStrictEqual([{ a: 1, b: { c: 2 }, d: [1, 2], e: 'hello' }]))
test('deepMerge arrayValue2', () =>
  expect(deepMerge(arrayValue1, arrayValue2)).toStrictEqual([
    { a: 1, b: { c: 2, f: 3 }, d: [5, 2, 3, 4], e: 'world', g: false },
    { a: 1, b: { c: 2 }, d: [1, 2], e: 'hello' }
  ]))
