#### 用例1-无参数

```typescript
const value = 'https://example.com/'
console.log(getUrlParamsByKey(value, 'page'))

/* output => '' */
```

#### 用例2-有效key

```typescript
const value = 'https://example.com/#/list?page=1&size=10'
console.log(getUrlParamsByKey(value, 'page'))

/* output => '1' */
```

#### 用例3-无效key

```typescript
const value = 'https://example.com/list?page=1&size=10'
console.log(getUrlParamsByKey(value, 'sort'))

/* output => '' */
```

#### 用例4-异常地址

```typescript
const value = 'https://example.com/#/list?page=1&size=10?sort=id&test&filter='
console.log(getUrlParamsByKey(value, 'sort'))

/* output => 'id' */
```

