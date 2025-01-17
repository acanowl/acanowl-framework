#### emptyObject

```typescript
const emptyObject = {}
console.log(isPlainObject(emptyObject))

/* output => true */
```

#### validObject

```typescript
const validObject = { a: 1 }
console.log(isPlainObject(validObject))

/* output => true */
```

#### validArray

```typescript
const validArray = [1]
console.log(isPlainObject(validArray))

/* output => false */
```

