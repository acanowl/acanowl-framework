[**@acanowl/utils**](../../README.md)

***

# Function: isPlainObject()

> **isPlainObject**(`value`): `value is PlainObject`

Defined in: [valid/index.ts:19](https://github.com/acanowl/acanowl-framework/blob/e83eea0b29b448bee66564c78f8f3ea4fab8f88b/packages/utils/src/valid/index.ts#L19)

是否是纯对象

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` |  |

## Returns

`value is PlainObject`

true | false

## Example

```ts
isPlainObject({})
outPut => true

isPlainObject([])
outPut => false
```
