[**@acanowl/utils**](../../README.md)

***

# Function: isDate()

> **isDate**(`value`): `value is Date`

Defined in: [valid/index.ts:93](https://github.com/acanowl/acanowl-framework/blob/56fbec47a32608dccbd714bce431df6d253fa988/packages/utils/src/valid/index.ts#L93)

是否是日期对象

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` |  |

## Returns

`value is Date`

true | false

## Example

```更多示例```
### isDate date, 返回 true

```typescript
const date = new Date()
console.log(isDate(date))

/* output => true */
```

### isDate string, 返回 false

```typescript
const string = 'string'
console.log(isDate(string))

/* output => false */
```
