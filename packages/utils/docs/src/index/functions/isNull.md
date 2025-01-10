[**@acanowl/utils**](../../README.md)

***

# Function: isNull()

> **isNull**(`value`): `value is null`

Defined in: [valid/index.ts:126](https://github.com/acanowl/acanowl-framework/blob/56fbec47a32608dccbd714bce431df6d253fa988/packages/utils/src/valid/index.ts#L126)

是否是null

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` |  |

## Returns

`value is null`

true | false

## Example

```更多示例```
### isNull nullValue, 返回 true

```typescript
const nullValue = null
console.log(isNull(nullValue))

/* output => true */
```

### isNull undefinedValue, 返回 false

```typescript
const undefinedValue = undefined
console.log(isNull(undefinedValue))

/* output => false */
```
