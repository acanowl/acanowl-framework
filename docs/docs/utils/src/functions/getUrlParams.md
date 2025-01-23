[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / getUrlParams

# Function: getUrlParams()

> **getUrlParams**(`url`): `PlainObject`

Defined in: [utils/src/str/index.ts:33](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/str/index.ts#L33)

获取url参数

## Parameters

### url

`string`

地址

## Returns

`PlainObject`

## Example

```更多示例```
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
