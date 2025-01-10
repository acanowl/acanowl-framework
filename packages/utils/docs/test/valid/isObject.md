### isObject emptyObject, 返回 true

```typescript
const emptyObject = {}
console.log(isObject(emptyObject))

/* output => true */
```

### isObject validObject, 返回 true

```typescript
const validObject = { a: 1 }
console.log(isObject(validObject))

/* output => true */
```

### isObject validArray, 返回 true

```typescript
const validArray = [1]
console.log(isObject(validArray))

/* output => true */
```

### isObject date, 返回 false

```typescript
const date = new Date()
console.log(isObject(date))

/* output => false */
```

### isObject nullValue, 返回 false

```typescript
const nullValue = null
console.log(isObject(nullValue))

/* output => false */
```

