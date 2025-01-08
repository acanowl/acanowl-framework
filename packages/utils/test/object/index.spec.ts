import { expect, test } from 'vitest'
import { deepClone, deepMerge, isArray } from '../../dist'

const objectValue1 = {
  a: 1,
  b: { c: 2 },
  d: [1, 2, 5],
  e: 'hello'
}
const objectValue2 = {
  b: { f: 3 },
  d: [1, 4],
  e: 'world',
  g: true
}

const cloneValue1 = deepClone(objectValue1)

test('deepClone objectValue1', () =>
  expect(deepClone(objectValue1)).toStrictEqual({
    a: 1,
    b: { c: 2 },
    d: [1, 2, 5],
    e: 'hello'
  }))
test('cloneValue1 === objectValue1', () => expect(cloneValue1 === objectValue1).toBe(false))
test('cloneValue1.b === objectValue1.b', () => expect(cloneValue1.b === objectValue1.b).toBe(false))

test('deepMerge objectValue2', () =>
  expect(deepMerge(objectValue1, objectValue2)).toStrictEqual({
    a: 1,
    b: { c: 2, f: 3 },
    d: [1, 4],
    e: 'world',
    g: true
  }))

const customizer = (targetValue: unknown, sourceValue: unknown) => {
  if (isArray(targetValue) && isArray(sourceValue)) {
    return targetValue.concat(sourceValue)
  }
}
test('deepMerge objectValue2 concat', () =>
  expect(deepMerge(objectValue1, objectValue2, customizer)).toStrictEqual({
    a: 1,
    b: { c: 2, f: 3 },
    d: [1, 2, 5, 1, 4],
    e: 'world',
    g: true
  }))

const setCustomizer = (targetValue: unknown, sourceValue: unknown) => {
  if (isArray(targetValue) && isArray(sourceValue)) {
    return [...new Set([...targetValue, ...sourceValue])]
  }
}
test('deepMerge objectValue2 setCustomizer', () =>
  expect(deepMerge(objectValue1, objectValue2, setCustomizer)).toStrictEqual({
    a: 1,
    b: { c: 2, f: 3 },
    d: [1, 2, 5, 4],
    e: 'world',
    g: true
  }))
