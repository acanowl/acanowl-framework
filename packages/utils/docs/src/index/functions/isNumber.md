[**@acanowl/utils**](../../README.md)

***

# Function: isNumber()

> **isNumber**(`value`): `value is number`

Defined in: [valid/index.ts:59](https://github.com/acanowl/acanowl-framework/blob/56fbec47a32608dccbd714bce431df6d253fa988/packages/utils/src/valid/index.ts#L59)

是否是数字

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` |  |

## Returns

`value is number`

true | false

## Example

```更多示例```
### isNumber number, 返回 true

```typescript
const number = 1
console.log(isNumber(number))

/* output => true */
```

### isNumber string, 返回 false

```typescript
const string = 'string'
console.log(isNumber(string))

/* output => false */
```
