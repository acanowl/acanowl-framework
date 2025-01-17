#### objectValue1

```typescript
const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
console.log(deepClone(objectValue))

/* output => { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' } */
```

#### cloneValue1 === objectValue1

```typescript
const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
const cloneValue = deepClone(objectValue)
console.log(cloneValue === objectValue)

/* output => false */
```

#### cloneValue1.b === objectValue1.b

```typescript
const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
const cloneValue = deepClone(objectValue)
console.log(cloneValue.b === objectValue.b)

/* output => false */
```

