#### 用例1-空对象

```typescript
const value = {}
const key = 'key'
console.log(hasKey(value, key))

/* output => false */
```

#### 用例2-存在有效对象内

```typescript
const value = { key: '1' }
const key = 'key'
console.log(hasKey(value, key))

/* output => true */
```

#### 用例3-不存在有效对象内

```typescript
const value = { key: '1' }
const key = 'page'
console.log(hasKey(value, key))

/* output => false */
```

