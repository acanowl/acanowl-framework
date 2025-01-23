#### 用例1-空对象

```typescript
const value = {}
console.log(isPlainObject(value))

/* output => true */
```

#### 用例2-有效对象

```typescript
const value = { a: 1 }
console.log(isPlainObject(value))

/* output => true */
```

#### 用例3-有效数组

```typescript
const value = [1]
console.log(isPlainObject(value))

/* output => false */
```

