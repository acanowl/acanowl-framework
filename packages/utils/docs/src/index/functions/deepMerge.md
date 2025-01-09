[**@acanowl/utils**](../../README.md)

***

# Function: deepMerge()

> **deepMerge**\<`T`, `U`\>(`target`, `source`, `customizer`?): `T` & `U`

Defined in: [object/index.ts:85](https://github.com/acanowl/acanowl-framework/blob/e83eea0b29b448bee66564c78f8f3ea4fab8f88b/packages/utils/src/object/index.ts#L85)

深度合并

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `target` | `T` | 目标对象 |
| `source` | `U` | 源对象 |
| `customizer`? | [`Customizer`](../type-aliases/Customizer.md)\<`unknown`\> | 数组合并自定义函数 |

## Returns

`T` & `U`

合并后的对象

## Examples

```ts
const object = { 'a': { 'b': [1, 2] } }
const object2 = { 'a': { 'a': 1, b: [2, 3], 'c': 2 } }
```

```ts
console.log(deepMerge(object, object2))
output => { 'a': { 'a': 1, 'b': [2, 3], 'c': 2 } }
```

```ts
const customizer = (target, source) => target.concat(source)
console.log(deepMerge(object, object2, customizer))
output => { 'a': { 'a': 1, 'b': [1, 2, 2, 3], 'c': 2 } }
```

```ts
const customizer = (target, source) => {
  return [...new Set([...target, ...source])]
}
console.log(deepMerge(object, object2, customizer))
output => { 'a': { 'a': 1, 'b': [1, 2, 3], 'c': 2 } }
```
