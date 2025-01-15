### isObject

#### emptyObject

```typescript
const emptyObject = {}
console.log(isObject(emptyObject))

/* output => true */
```

### isObject

#### validObject

```typescript
const validObject = { a: 1 }
console.log(isObject(validObject))

/* output => true */
```

### isObject

#### validArray

```typescript
const validArray = [1]
console.log(isObject(validArray))

/* output => true */
```

### isObject

#### date

```typescript
const date = new Date()
console.log(isObject(date))

/* output => false */
```

### isObject

#### nullValue

```typescript
const nullValue = null
console.log(isObject(nullValue))

/* output => false */
```

