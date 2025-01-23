#### 用例1-正则

```typescript
const value = /regExp/
console.log(isRegExp(value))

/* output => true */
```

#### 用例2-有效字符串

```typescript
const value: string = 'string'
console.log(isRegExp(value))

/* output => false */
```

