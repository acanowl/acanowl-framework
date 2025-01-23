#### 用例1-普通函数

```typescript
const value = function () {}
console.log(isFunction(value))

/* output => true */
```

#### 用例2-异步函数

```typescript
const value = async function () {}
console.log(isFunction(value))

/* output => true */
```

#### 用例3-Null

```typescript
const value = null
console.log(isFunction(value))

/* output => false */
```

