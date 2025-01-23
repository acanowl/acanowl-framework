#### 用例1-对象

```typescript
const value = { a: 1 }
console.log(getObjectType(value))

/* output => 'Object' */
```

#### 用例2-数组

```typescript
const value = [1]
console.log(getObjectType(value))

/* output => 'Array' */
```

#### 用例3-Null

```typescript
const value = null
console.log(getObjectType(value))

/* output => 'Null' */
```

#### 用例4-字符串

```typescript
const value: string = 'string'
console.log(getObjectType(value))

/* output => 'String' */
```

#### 用例5-数字

```typescript
const value: number = 1
console.log(getObjectType(value))

/* output => 'Number' */
```

