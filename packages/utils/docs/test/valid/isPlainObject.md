### isPlainObject emptyObject, 返回 true

```typescript
const emptyObject = {}
console.log(isPlainObject(emptyObject))

/* output => true */
```

### isPlainObject validObject, 返回 true

```typescript
const validObject = { a: 1 }
console.log(isPlainObject(validObject))

/* output => true */
```

### isPlainObject validArray, 返回 false

```typescript
const validArray = [1]
console.log(isPlainObject(validArray))

/* output => false */
```

