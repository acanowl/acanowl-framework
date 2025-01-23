#### 用例1-空数组

```typescript
const value: unknown = []
console.log(isArray(value))

/* output => true */
```

#### 用例2-有效数组

```typescript
const value = [1]
console.log(isArray(value))

/* output => true */
```

#### 用例3-有效字符串

```typescript
const string: string = 'string'
console.log(isArray(string))

/* output => false */
```

