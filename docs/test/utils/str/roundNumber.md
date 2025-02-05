#### 用例1-无小数位

```typescript
const value: string = '0.495'
console.log(roundNumber(value))

/* output => '0.495' */
```

#### 用例2-小数位长度为0

```typescript
const value: string = '10.50'
console.log(roundNumber(value, 0))

/* output => '11' */
```

#### 用例3-数字、小数位长度为2

```typescript
const value: number = 0.495
console.log(roundNumber(value, 2))

/* output => '0.50' */
```

#### 用例4-负数、数字、小数位长度为2

```typescript
const value: number = -10203040.495
console.log(roundNumber(value, 2))

/* output => '-10203040.50' */
```

#### 用例5-小数位长度为4

```typescript
const value: string = '0.495'
console.log(roundNumber(value, 4))

/* output => '0.4950' */
```

#### 用例6-小数位长度为0

```typescript
const value: number = 43.59
console.log(roundNumber(value, 0))

/* output => '44' */
```

#### 用例7-无效数据

```typescript
const value = null
console.log(roundNumber(value, 3))

/* output => '' */
```

