[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isNull

# Function: isNull()

> **isNull**(`value`): `value is null`

Defined in: [utils/src/valid/index.ts:159](https://github.com/acanowl/acanowl-framework/blob/b5107a43a84c047f5172f446640c957c87bb9285/packages/utils/src/valid/index.ts#L159)

是否是null

## Parameters

### value

`unknown`

## Returns

`value is null`

true | false

## Example

```更多示例```
#### nullValue

```typescript
const nullValue = null
console.log(isNull(nullValue))

/* output => true */
```

#### undefinedValue

```typescript
const undefinedValue = undefined
console.log(isNull(undefinedValue))

/* output => false */
```
