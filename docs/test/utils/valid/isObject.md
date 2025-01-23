#### 用例1-空对象

```typescript
const value = {}
console.log(isObject(value))

/* output => true */
```

#### 用例2-有效对象

```typescript
const value = { a: 1 }
console.log(isObject(value))

/* output => true */
```

#### 用例3-有效数组

```typescript
const value = [1]
console.log(isObject(value))

/* output => true */
```

#### 用例4-有效时间对象

```typescript
const value = new Date()
console.log(isObject(value))

/* output => false */
```

#### 用例-Null

```typescript
const value = null
console.log(isObject(value))

/* output => false */
```

