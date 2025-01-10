[**@acanowl/utils**](../../README.md)

***

# Function: isString()

> **isString**(`value`): `value is string`

Defined in: [valid/index.ts:48](https://github.com/acanowl/acanowl-framework/blob/56fbec47a32608dccbd714bce431df6d253fa988/packages/utils/src/valid/index.ts#L48)

是否是字符串

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` |  |

## Returns

`value is string`

true | false

## Example

```更多示例```
### isString string, 返回 true

```typescript
const string = 'string'
console.log(isString(string))

/* output => true */
```

### isString number, 返回 false

```typescript
const number = 1
console.log(isString(number))

/* output => false */
```
