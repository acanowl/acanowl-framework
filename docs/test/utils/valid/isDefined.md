#### 用例1-regExp

```typescript
const value = /regExp/
console.log(isDefined(value))

/* output => true */
```

#### 用例2-string

```typescript
const value: string = 'string'
console.log(isDefined(value))

/* output => true */
```

#### 用例3-Null

```typescript
const value = null
console.log(isDefined(value))

/* output => false */
```

#### 用例4-Undefined

```typescript
const value = undefined
console.log(isDefined(value))

/* output => false */
```

