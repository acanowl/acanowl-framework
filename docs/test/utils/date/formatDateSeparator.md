#### 用例1

```typescript
const value: string = '2024-01-02'
console.log(formatDateSeparator(value))

/* output => '2024/01/02' */
```

#### 用例2

```typescript
const value: string = '2024-01-02 12:11:23'
console.log(formatDateSeparator(value))

/* output => '2024/01/02 12:11:23' */
```

#### 用例3

```typescript
const value: string = '20240102'
console.log(formatDateSeparator(value))

/* output => '20240102' */
```

