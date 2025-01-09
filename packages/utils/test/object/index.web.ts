import { deepClone, deepMerge, isArray } from '../../dist/index.js'

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

console.log('deepClone objectValue1: ', deepClone(objectValue1))
console.log('cloneValue1 === objectValue1: ', cloneValue1 === objectValue1)
console.log('cloneValue1 === objectValue1: ', cloneValue1.b === objectValue1.b)

console.log('deepClone objectValue2: ', deepMerge(objectValue1, objectValue2))

const customizer = (targetValue: unknown, sourceValue: unknown) => {
  if (isArray(targetValue) && isArray(sourceValue)) {
    return targetValue.concat(sourceValue)
  }
}
console.log('deepMerge objectValue2 concat: ', deepMerge(objectValue1, objectValue2, customizer))

const setCustomizer = (targetValue: unknown, sourceValue: unknown) => {
  if (isArray(targetValue) && isArray(sourceValue)) {
    return [...new Set([...targetValue, ...sourceValue])]
  }
}
console.log('deepMerge objectValue2 setCustomizer: ', deepMerge(objectValue1, objectValue2, setCustomizer))
