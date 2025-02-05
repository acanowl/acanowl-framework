#### 用例1-无小数位

```typescript
const value: string = '10000.495'
console.log(currency(value))

/* output => '10,000.495' */
```

#### 用例2-小数位长度为0

```typescript
const value: string = '10000.495'
console.log(currency(value, 0))

/* output => '10,000' */
```

#### 用例3-负数、小数位长度为2

```typescript
const value: number = -10203040.495
console.log(currency(value, 2))

/* output => '-10,203,040.50' */
```

