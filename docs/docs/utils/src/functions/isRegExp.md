[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isRegExp

# Function: isRegExp()

> **isRegExp**(`value`): `value is RegExp`

Defined in: [utils/src/valid/index.ts:137](https://github.com/acanowl/acanowl-framework/blob/c79152f4a5639ba2e312f011a139bf95a1b76935/packages/utils/src/valid/index.ts#L137)

是否是正则表达式

## Parameters

### value

`unknown`

## Returns

`value is RegExp`

true | false

## Example

```更多示例```
#### regExp

```typescript
const regExp = /regExp/
console.log(isRegExp(regExp))

/* output => true */
```

#### string

```typescript
const string = 'string'
console.log(isRegExp(string))

/* output => false */
```
