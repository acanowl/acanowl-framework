### isArray emptyArray, 返回 true

```typescript
const emptyArray = []
console.log(isArray(emptyArray))

/* output => true */
```

### isArray validArray, 返回 true

```typescript
const validArray = [1]
console.log(isArray(validArray))

/* output => true */
```

### isArray string, 返回 false

```typescript
const string = 'string'
console.log(isArray(string))

/* output => false */
```

