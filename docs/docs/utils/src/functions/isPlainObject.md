[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isPlainObject

# Function: isPlainObject()

> **isPlainObject**(`value`): `value is PlainObject`

Defined in: [utils/src/valid/index.ts:14](https://github.com/acanowl/acanowl-framework/blob/b5107a43a84c047f5172f446640c957c87bb9285/packages/utils/src/valid/index.ts#L14)

是否是纯对象

## Parameters

### value

`unknown`

## Returns

`value is PlainObject`

true | false

## Example

```更多示例```
#### emptyObject

```typescript
const emptyObject = {}
console.log(isPlainObject(emptyObject))

/* output => true */
```

#### validObject

```typescript
const validObject = { a: 1 }
console.log(isPlainObject(validObject))

/* output => true */
```

#### validArray

```typescript
const validArray = [1]
console.log(isPlainObject(validArray))

/* output => false */
```
