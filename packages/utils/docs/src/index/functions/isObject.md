[**@acanowl/utils**](../../README.md)

***

# Function: isObject()

> **isObject**(`value`): value is PlainObject \| unknown\[\]

Defined in: [valid/index.ts:36](https://github.com/acanowl/acanowl-framework/blob/56fbec47a32608dccbd714bce431df6d253fa988/packages/utils/src/valid/index.ts#L36)

是否是对象(不包括null, Date, RegExp)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` |  |

## Returns

value is PlainObject \| unknown\[\]

true | false

## Example

```更多示例```
### isObject emptyObject, 返回 true

```typescript
const emptyObject = {}
console.log(isObject(emptyObject))

/* output => true */
```

### isObject validObject, 返回 true

```typescript
const validObject = { a: 1 }
console.log(isObject(validObject))

/* output => true */
```

### isObject validArray, 返回 true

```typescript
const validArray = [1]
console.log(isObject(validArray))

/* output => true */
```

### isObject date, 返回 false

```typescript
const date = new Date()
console.log(isObject(date))

/* output => false */
```

### isObject nullValue, 返回 false

```typescript
const nullValue = null
console.log(isObject(nullValue))

/* output => false */
```
