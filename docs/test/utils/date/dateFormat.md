#### 有效时间对象

```typescript
const value = new Date('2024/01/02')
console.log(dateFormat(value))

/* output => '2024-01-02' */
```

#### 无效时间对象

```typescript
const value = new Date('error')
console.log(dateFormat(value))

/* output => '' */
```

#### 格式化

```typescript
const value = new Date('2024/01/02')
const fmt: string = 'yyyy年MM月'
console.log(dateFormat(value, fmt))

/* output => '2024年01月' */
```

