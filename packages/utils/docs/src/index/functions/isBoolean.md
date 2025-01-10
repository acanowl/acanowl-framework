[**@acanowl/utils**](../../README.md)

***

# Function: isBoolean()

> **isBoolean**(`value`): `value is boolean`

Defined in: [valid/index.ts:70](https://github.com/acanowl/acanowl-framework/blob/56fbec47a32608dccbd714bce431df6d253fa988/packages/utils/src/valid/index.ts#L70)

是否是布尔值

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` |  |

## Returns

`value is boolean`

true | false

## Example

```更多示例```
### isBoolean boolean, 返回 true

```typescript
const boolean = true
console.log(isBoolean(boolean))

/* output => true */
```

### isBoolean string, 返回 false

```typescript
const string = 'string'
console.log(isBoolean(string))

/* output => false */
```
