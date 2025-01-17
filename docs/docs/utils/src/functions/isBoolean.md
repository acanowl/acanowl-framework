[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isBoolean

# Function: isBoolean()

> **isBoolean**(`value`): `value is boolean`

Defined in: [utils/src/valid/index.ts:92](https://github.com/acanowl/acanowl-framework/blob/b5107a43a84c047f5172f446640c957c87bb9285/packages/utils/src/valid/index.ts#L92)

是否是布尔值

## Parameters

### value

`unknown`

## Returns

`value is boolean`

true | false

## Example

```更多示例```
#### boolean

```typescript
const boolean = true
console.log(isBoolean(boolean))

/* output => true */
```

#### string

```typescript
const string = 'string'
console.log(isBoolean(string))

/* output => false */
```
