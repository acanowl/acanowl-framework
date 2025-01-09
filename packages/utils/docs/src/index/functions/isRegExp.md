[**@acanowl/utils**](../../README.md)

***

# Function: isRegExp()

> **isRegExp**(`value`): `value is RegExp`

Defined in: [valid/index.ts:158](https://github.com/acanowl/acanowl-framework/blob/e83eea0b29b448bee66564c78f8f3ea4fab8f88b/packages/utils/src/valid/index.ts#L158)

是否是正则表达式

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` |  |

## Returns

`value is RegExp`

true | false

## Example

```ts
isRegExp(/test/)
outPut => true

isRegExp({})
outPut => false
```
