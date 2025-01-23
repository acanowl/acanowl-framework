#### 用例1-有效时间对象

```typescript
const value = new Date()
console.log(isValidDate(value))

/* output => true */
```

#### 用例2-无效时间对象

```typescript
const value = new Date('error')
console.log(isValidDate(value))

/* output => false */
```

#### 用例3-有效字符串

```typescript
const value: string = 'string'
console.log(isValidDate(value))

/* output => false */
```

