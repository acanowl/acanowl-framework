#### 用例1-数字

```typescript
const value = 12.3
console.log(getDecimalLength(value))

/* output => 1 */
```

#### 用例2-数字

```typescript
const value = 12.3
console.log(getDecimalLength(value, 2))

/* output => 2 */
```

#### 用例3-字符串

```typescript
const value = '12.345'
console.log(getDecimalLength(value, 1))

/* output => 1 */
```

#### 用例4-null

```typescript
const value = null
console.log(getDecimalLength(value, 3))

/* output => 0 */
```

#### 用例5-NaN

```typescript
const value = NaN
console.log(getDecimalLength(value, 3))

/* output => 0 */
```

#### 用例6-无效字符串

```typescript
const value = ''
console.log(getDecimalLength(value, 3))

/* output => 0 */
```

#### 用例7-空格

```typescript
const value = ''
console.log(getDecimalLength(value, 3))

/* output => 0 */
```

