#### 用例1-有效字符串

```typescript
const value: string = 'string'
console.log(isString(value))

/* output => true */
```

#### 用例2-无效字符串

```typescript
const value: string = ''
console.log(isString(value))

/* output => true */
```

#### 用例3-有效数字

```typescript
const value: number = 1
console.log(isString(value))

/* output => false */
```

