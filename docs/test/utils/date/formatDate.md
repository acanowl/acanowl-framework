#### 用例1-字符串

```typescript
const value: string = '20240102121123'
console.log(formatDate(value))

/* output => '2024-01-02' */
```

#### 用例2-字符串格式化

```typescript
const value: string = '20240102121123'
const fmt: string = 'yyyy年MM月dd日 hh时mm分ss秒'
console.log(formatDate(value, fmt))

/* output => '2024年01月02日 12时11分23秒' */
```

#### 用例3-字符串时间戳

```typescript
const value: string = '1737440001365'
console.log(formatDate(value))

/* output => '2025-01-21' */
```

#### 用例4-时间戳

```typescript
const value: number = 1737440001365
console.log(formatDate(value))

/* output => '2025-01-21' */
```

#### 用例5-有效时间对象

```typescript
const value = new Date('2024/01/02')
console.log(formatDate(value))

/* output => '2024-01-02' */
```

#### 用例6-无效时间对象

```typescript
const value = new Date('error')
console.log(formatDate(value))

/* output => '' */
```

