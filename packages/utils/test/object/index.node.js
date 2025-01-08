import { deepClone, deepMerge } from '../../dist/index.js'

const objectValue1 = { a: 1, b: { c: 2 }, d: [1, 2], e: 'hello' }
const objectValue2 = { b: { f: 3 }, d: [3, 4], e: 'world', g: true }

const arrayValue1 = [{ a: 1, b: { c: 2 }, d: [5, 2], e: 'hello' }]
const arrayValue2 = [
  { b: { f: 3 }, d: [3, 4], e: 'world', g: false },
  { a: 1, b: { c: 2 }, d: [1, 2], e: 'hello' }
]

console.log('deepClone objectValue1: ', deepClone(objectValue1))
console.log('deepMerge objectValue2: ', deepMerge(objectValue1, objectValue2))

console.log('deepClone arrayValue1: ', deepClone(arrayValue1))
console.log('deepMerge arrayValue2: ', deepMerge(arrayValue1, arrayValue2))
