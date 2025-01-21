[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isObject

# Function: isObject()

> **isObject**(`value`): value is PlainObject \| unknown\[\]

Defined in: [utils/src/valid/index.ts:36](https://github.com/acanowl/acanowl-framework/blob/c79152f4a5639ba2e312f011a139bf95a1b76935/packages/utils/src/valid/index.ts#L36)

是否是对象(不包括null, Date, RegExp)

## Parameters

### value

`unknown`

## Returns

value is PlainObject \| unknown\[\]

true | false

## Example

```更多示例```
#### emptyObject

```typescript
const emptyObject = {}
console.log(isObject(emptyObject))

/* output => true */
```

#### validObject

```typescript
const validObject = { a: 1 }
console.log(isObject(validObject))

/* output => true */
```

#### validArray

```typescript
const validArray = [1]
console.log(isObject(validArray))

/* output => true */
```

#### date

```typescript
const date = new Date()
console.log(isObject(date))

/* output => false */
```

#### nullValue

```typescript
const nullValue = null
console.log(isObject(nullValue))

/* output => false */
```
