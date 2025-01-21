[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isNumber

# Function: isNumber()

> **isNumber**(`value`): `value is number`

Defined in: [utils/src/valid/index.ts:59](https://github.com/acanowl/acanowl-framework/blob/c79152f4a5639ba2e312f011a139bf95a1b76935/packages/utils/src/valid/index.ts#L59)

是否是数字

## Parameters

### value

`unknown`

## Returns

`value is number`

true | false

## Example

```更多示例```
#### number

```typescript
const number = 1
console.log(isNumber(number))

/* output => true */
```

#### string

```typescript
const string = 'string'
console.log(isNumber(string))

/* output => false */
```
