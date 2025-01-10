[**@acanowl/utils**](../../README.md)

***

# Function: isPlainObject()

> **isPlainObject**(`value`): `value is PlainObject`

Defined in: [valid/index.ts:14](https://github.com/acanowl/acanowl-framework/blob/56fbec47a32608dccbd714bce431df6d253fa988/packages/utils/src/valid/index.ts#L14)

是否是纯对象

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` |  |

## Returns

`value is PlainObject`

true | false

## Example

```更多示例```
### isPlainObject emptyObject, 返回 true

```typescript
const emptyObject = {}
console.log(isPlainObject(emptyObject))

/* output => true */
```

### isPlainObject validObject, 返回 true

```typescript
const validObject = { a: 1 }
console.log(isPlainObject(validObject))

/* output => true */
```

### isPlainObject validArray, 返回 false

```typescript
const validArray = [1]
console.log(isPlainObject(validArray))

/* output => false */
```
