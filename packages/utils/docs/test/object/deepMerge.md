### deepMerge objectValue2

```typescript
const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
const objectValue2 = { b: { f: 3 }, d: [1, 4], e: 'world', g: true }
console.log(deepMerge(objectValue, objectValue2))

/* output => {
  a: 1,
  b: { c: 2, f: 3 },
  d: [1, 4],
  e: 'world',
  g: true
} */
```

### deepMerge objectValue2 concat

```typescript
const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
const objectValue2 = { b: { f: 3 }, d: [1, 4], e: 'world', g: true }

const customizer = (targetValue: unknown, sourceValue: unknown) => {
  if (isArray(targetValue) && isArray(sourceValue)) {
    return targetValue.concat(sourceValue)
  }
}
console.log(deepMerge(objectValue, objectValue2, customizer))

/* output => {
  a: 1,
  b: { c: 2, f: 3 },
  d: [1, 2, 5, 1, 4],
  e: 'world',
  g: true
} */
```

### deepMerge objectValue2 setCustomizer

```typescript
const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
const objectValue2 = { b: { f: 3 }, d: [1, 4], e: 'world', g: true }

const setCustomizer = (targetValue: unknown, sourceValue: unknown) => {
  if (isArray(targetValue) && isArray(sourceValue)) {
    return [...new Set([...targetValue, ...sourceValue])]
  }
}
console.log(deepMerge(objectValue, objectValue2, setCustomizer))

/* output => {
  a: 1,
  b: { c: 2, f: 3 },
  d: [1, 2, 5, 4],
  e: 'world',
  g: true
} */
```

