[**@acanowl/utils**](../../README.md)

***

# Function: isDate()

> **isDate**(`value`): `value is Date`

Defined in: [valid/index.ts:142](https://github.com/acanowl/acanowl-framework/blob/e83eea0b29b448bee66564c78f8f3ea4fab8f88b/packages/utils/src/valid/index.ts#L142)

是否是日期对象

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` |  |

## Returns

`value is Date`

true | false

## Example

```ts
isDate(new Date())
outPut => true

isDate({})
outPut => false
```
