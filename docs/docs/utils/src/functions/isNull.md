[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isNull

# Function: isNull()

> **isNull**(`value`): `value is null`

Defined in: [utils/src/valid/index.ts:180](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/valid/index.ts#L180)

是否是null

## Parameters

### value

`unknown`

## Returns

`value is null`

true | false

## Example

```更多示例```
#### 用例1-Null

```typescript
const value = null
console.log(isNull(value))

/* output => true */
```

#### 用例2-Undefined

```typescript
const value = undefined
console.log(isNull(value))

/* output => false */
```
