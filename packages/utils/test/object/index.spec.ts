import { expect, test } from 'vitest'
import { deepClone, deepMerge, isArray } from '../../dist'

test('deepClone objectValue1', () => {
  const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
  expect(deepClone(objectValue)).toStrictEqual({ a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' })
})

test('cloneValue1 === objectValue1', () => {
  const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
  const cloneValue = deepClone(objectValue)
  expect(cloneValue === objectValue).toBe(false)
})

test('cloneValue1.b === objectValue1.b', () => {
  const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
  const cloneValue = deepClone(objectValue)
  expect(cloneValue.b === objectValue.b).toBe(false)
})

test('deepMerge objectValue2', () => {
  const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
  const objectValue2 = { b: { f: 3 }, d: [1, 4], e: 'world', g: true }
  expect(deepMerge(objectValue, objectValue2)).toStrictEqual({
    a: 1,
    b: { c: 2, f: 3 },
    d: [1, 4],
    e: 'world',
    g: true
  })
})

test('deepMerge objectValue2 concat', () => {
  const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
  const objectValue2 = { b: { f: 3 }, d: [1, 4], e: 'world', g: true }

  const customizer = (targetValue: unknown, sourceValue: unknown) => {
    if (isArray(targetValue) && isArray(sourceValue)) {
      return targetValue.concat(sourceValue)
    }
  }
  expect(deepMerge(objectValue, objectValue2, customizer)).toStrictEqual({
    a: 1,
    b: { c: 2, f: 3 },
    d: [1, 2, 5, 1, 4],
    e: 'world',
    g: true
  })
})

test('deepMerge objectValue2 setCustomizer', () => {
  const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
  const objectValue2 = { b: { f: 3 }, d: [1, 4], e: 'world', g: true }

  const setCustomizer = (targetValue: unknown, sourceValue: unknown) => {
    if (isArray(targetValue) && isArray(sourceValue)) {
      return [...new Set([...targetValue, ...sourceValue])]
    }
  }
  expect(deepMerge(objectValue, objectValue2, setCustomizer)).toStrictEqual({
    a: 1,
    b: { c: 2, f: 3 },
    d: [1, 2, 5, 4],
    e: 'world',
    g: true
  })
})
