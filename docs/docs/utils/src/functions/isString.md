[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isString

# Function: isString()

> **isString**(`value`): `value is string`

Defined in: [utils/src/valid/index.ts:48](https://github.com/acanowl/acanowl-framework/blob/c79152f4a5639ba2e312f011a139bf95a1b76935/packages/utils/src/valid/index.ts#L48)

是否是字符串

## Parameters

### value

`unknown`

## Returns

`value is string`

true | false

## Example

```更多示例```
#### string

```typescript
const string = 'string'
console.log(isString(string))

/* output => true */
```

#### number

```typescript
const number = 1
console.log(isString(number))

/* output => false */
```
