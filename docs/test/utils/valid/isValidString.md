#### 用例1-有效字符串

```typescript
const value = 'string'
console.log(isValidString(value))

/* output => true */
```

#### 用例2-无效字符串

```typescript
const value = ''
console.log(isValidString(value))

/* output => false */
```

#### 用例3-空格字符串

```typescript
const value = '  '
console.log(isValidString(value))

/* output => false */
```

#### 用例4-数字

```typescript
const value = 1
console.log(isValidString(value))

/* output => false */
```

