#### 用例1-字符串时间戳

```typescript
const value: string = '1737440001365'
console.log(isTimestamp(value))

/* output => true */
```

#### 用例2-时间戳

```typescript
const value: number = 1737440001365
console.log(isTimestamp(value))

/* output => true */
```

#### 用例3-字符串

```typescript
const value: string = '20240102121123'
console.log(isTimestamp(value))

/* output => false */
```

