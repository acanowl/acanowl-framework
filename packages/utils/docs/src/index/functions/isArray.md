[**@acanowl/utils**](../../README.md)

***

# Function: isArray()

> **isArray**(`value`): `value is unknown[]`

Defined in: [valid/index.ts:35](https://github.com/acanowl/acanowl-framework/blob/e83eea0b29b448bee66564c78f8f3ea4fab8f88b/packages/utils/src/valid/index.ts#L35)

是否是数组

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` |  |

## Returns

`value is unknown[]`

true | false

## Example

```ts
isArray([])
outPut => true

isArray({})
outPut => false
```
