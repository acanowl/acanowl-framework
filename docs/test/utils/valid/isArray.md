#### emptyArray

```typescript
const emptyArray: unknown = []
console.log(isArray(emptyArray))

/* output => true */
```

#### validArray

```typescript
const validArray = [1]
console.log(isArray(validArray))

/* output => true */
```

#### string

```typescript
const string = 'string'
console.log(isArray(string))

/* output => false */
```

