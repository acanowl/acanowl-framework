#### 用例1-有效数字

```typescript
const value: number = 1
console.log(isNonZeroNumber(value))

/* output => true */
```

#### 用例2-无效数字NaN

```typescript
const value = NaN
console.log(isNonZeroNumber(value))

/* output => false */
```

#### 用例3-数字0

```typescript
const value: number = 0
console.log(isNonZeroNumber(value))

/* output => false */
```

#### 用例4-有效字符串

```typescript
const value: string = 'string'
console.log(isNonZeroNumber(value))

/* output => false */
```

