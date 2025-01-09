[**@acanowl/utils**](../../README.md)

***

# Function: deepClone()

> **deepClone**\<`T`\>(`obj`): `T`

Defined in: [object/index.ts:16](https://github.com/acanowl/acanowl-framework/blob/e83eea0b29b448bee66564c78f8f3ea4fab8f88b/packages/utils/src/object/index.ts#L16)

深度克隆

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `obj` | `T` | 要克隆的对象 |

## Returns

`T`

克隆后的对象

## Example

```ts
const object = { 'a': { 'b': 1 } }
console.log(deepClone(object))
output => { 'a': { 'b': 1 } }
```
