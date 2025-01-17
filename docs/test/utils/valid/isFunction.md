#### func

```typescript
const func = function () {}
console.log(isFunction(func))

/* output => true */
```

#### asyncfunc

```typescript
const asyncfunc = async function () {}
console.log(isFunction(asyncfunc))

/* output => true */
```

#### nullValue

```typescript
const nullValue = null
console.log(isFunction(nullValue))

/* output => false */
```

