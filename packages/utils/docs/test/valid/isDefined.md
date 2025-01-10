### isDefined regExp, 返回 true

```typescript
const regExp = /regExp/
console.log(isDefined(regExp))

/* output => true */
```

### isDefined string, 返回 true

```typescript
const string = 'string'
console.log(isDefined(string))

/* output => true */
```

### isDefined nullValue, 返回 false

```typescript
const nullValue = null
console.log(isDefined(nullValue))

/* output => false */
```

### isDefined undefinedValue, 返回 false

```typescript
const undefinedValue = undefined
console.log(isDefined(undefinedValue))

/* output => false */
```

