[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / getUrlParamsByKey

# Function: getUrlParamsByKey()

> **getUrlParamsByKey**(`url`, `key`): `string`

Defined in: [utils/src/str/index.ts:53](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/str/index.ts#L53)

获取url参数指定key值

## Parameters

### url

`string`

地址

### key

`string`

参数

## Returns

`string`

## Example

```更多示例```
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
