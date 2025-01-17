#### emptyObject

```typescript
const emptyObject = {}
console.log(isObject(emptyObject))

/* output => true */
```

#### validObject

```typescript
const validObject = { a: 1 }
console.log(isObject(validObject))

/* output => true */
```

#### validArray

```typescript
const validArray = [1]
console.log(isObject(validArray))

/* output => true */
```

#### date

```typescript
const date = new Date()
console.log(isObject(date))

/* output => false */
```

#### nullValue

```typescript
const nullValue = null
console.log(isObject(nullValue))

/* output => false */
```

