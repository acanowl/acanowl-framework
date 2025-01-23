#### 用例1-无参数

```typescript
const value = 'https://example.com/'
console.log(getUrlParams(value))

/* output => {} */
```

#### 用例2-hash模式

```typescript
const value = 'https://example.com/#/list?page=1&size=10'
console.log(getUrlParams(value))

/* output => { page: '1', size: '10' } */
```

#### 用例3-history模式

```typescript
const value = 'https://example.com/list?page=1&size=10'
console.log(getUrlParams(value))

/* output => { page: '1', size: '10' } */
```

#### 用例4-异常地址

```typescript
const value = 'https://example.com/#/list?page=1&size=10?sort=id&test&filter='
console.log(getUrlParams(value))

/* output => { page: '1', size: '10', sort: 'id', filter: '' } */
```

