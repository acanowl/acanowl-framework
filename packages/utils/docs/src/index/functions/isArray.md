[**@acanowl/utils**](../../README.md)

***

# Function: isArray()

> **isArray**(`value`): `value is unknown[]`

Defined in: [valid/index.ts:25](https://github.com/acanowl/acanowl-framework/blob/56fbec47a32608dccbd714bce431df6d253fa988/packages/utils/src/valid/index.ts#L25)

是否是数组

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` |  |

## Returns

`value is unknown[]`

true | false

## Example

```更多示例```
### isArray emptyArray, 返回 true

```typescript
const emptyArray = []
console.log(isArray(emptyArray))

/* output => true */
```

### isArray validArray, 返回 true

```typescript
const validArray = [1]
console.log(isArray(validArray))

/* output => true */
```

### isArray string, 返回 false

```typescript
const string = 'string'
console.log(isArray(string))

/* output => false */
```
