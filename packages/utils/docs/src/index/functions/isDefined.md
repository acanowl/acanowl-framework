[**@acanowl/utils**](../../README.md)

***

# Function: isDefined()

> **isDefined**\<`T`\>(`value`): `value is T`

Defined in: [valid/index.ts:177](https://github.com/acanowl/acanowl-framework/blob/e83eea0b29b448bee66564c78f8f3ea4fab8f88b/packages/utils/src/valid/index.ts#L177)

是否定义(不为null, undefined)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `undefined` \| `null` \| `T` |  |

## Returns

`value is T`

true | false

## Example

```ts
isDefined(1)
outPut => true

isDefined(null)
outPut => false

isDefined(undefined)
outPut => false
```
