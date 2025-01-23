[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isBoolean

# Function: isBoolean()

> **isBoolean**(`value`): `value is boolean`

Defined in: [utils/src/valid/index.ts:113](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/valid/index.ts#L113)

是否是布尔值

## Parameters

### value

`unknown`

## Returns

`value is boolean`

true | false

## Example

```更多示例```
#### 用例1-布尔值

```typescript
const value = true
console.log(isBoolean(value))

/* output => true */
```

#### 用例2-有效字符串

```typescript
const value: string = 'string'
console.log(isBoolean(value))

/* output => false */
```
