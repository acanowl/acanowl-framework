[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isArray

# Function: isArray()

> **isArray**(`value`): `value is unknown[]`

Defined in: [utils/src/valid/index.ts:25](https://github.com/acanowl/acanowl-framework/blob/c79152f4a5639ba2e312f011a139bf95a1b76935/packages/utils/src/valid/index.ts#L25)

是否是数组

## Parameters

### value

`unknown`

## Returns

`value is unknown[]`

true | false

## Example

```更多示例```
#### emptyArray

```typescript
const emptyArray: unknown = []
console.log(isArray(emptyArray))

/* output => true */
```

#### validArray

```typescript
const validArray = [1]
console.log(isArray(validArray))

/* output => true */
```

#### string

```typescript
const string = 'string'
console.log(isArray(string))

/* output => false */
```
