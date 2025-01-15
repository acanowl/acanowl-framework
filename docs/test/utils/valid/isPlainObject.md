### isPlainObject

#### emptyObject

```typescript
const emptyObject = {}
console.log(isPlainObject(emptyObject))

/* output => true */
```

### isPlainObject

#### validObject

```typescript
const validObject = { a: 1 }
console.log(isPlainObject(validObject))

/* output => true */
```

### isPlainObject

#### validArray

```typescript
const validArray = [1]
console.log(isPlainObject(validArray))

/* output => false */
```

