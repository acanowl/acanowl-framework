[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / hasKey

# Function: hasKey()

> **hasKey**\<`T`\>(`obj`, `key`): `key is keyof T`

Defined in: [utils/src/valid/index.ts:192](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/valid/index.ts#L192)

是否存在key

## Type Parameters

• **T**

## Parameters

### obj

`T`

目标对象或数组

### key

`PropertyKey`

指定key值

## Returns

`key is keyof T`

## Example

```更多示例```
#### 用例1-空对象

```typescript
const value = {}
const key = 'key'
console.log(hasKey(value, key))

/* output => false */
```

#### 用例2-存在有效对象内

```typescript
const value = { key: '1' }
const key = 'key'
console.log(hasKey(value, key))

/* output => true */
```

#### 用例3-不存在有效对象内

```typescript
const value = { key: '1' }
const key = 'page'
console.log(hasKey(value, key))

/* output => false */
```
