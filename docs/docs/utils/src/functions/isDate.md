[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isDate

# Function: isDate()

> **isDate**(`value`): `value is Date`

Defined in: [utils/src/valid/index.ts:115](https://github.com/acanowl/acanowl-framework/blob/b5107a43a84c047f5172f446640c957c87bb9285/packages/utils/src/valid/index.ts#L115)

是否是日期对象

## Parameters

### value

`unknown`

## Returns

`value is Date`

true | false

## Example

```更多示例```
#### date

```typescript
const date = new Date()
console.log(isDate(date))

/* output => true */
```

#### string

```typescript
const string = 'string'
console.log(isDate(string))

/* output => false */
```
