### isFunction func, 返回 true

```typescript
const func = function () {}
console.log(isFunction(func))

/* output => true */
```

### isFunction asyncfunc, 返回 true

```typescript
const asyncfunc = async function () {}
console.log(isFunction(asyncfunc))

/* output => true */
```

### isFunction nullValue, 返回 false

```typescript
const nullValue = null
console.log(isFunction(nullValue))

/* output => false */
```

