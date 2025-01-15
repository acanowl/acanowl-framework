[**@acanowl/utils**](../../README.md)

***

# Function: deepMerge()

> **deepMerge**\<`T`, `U`\>(`target`, `source`, `customizer`?): `T` & `U`

Defined in: [object/index.ts:61](https://github.com/acanowl/acanowl-framework/blob/829d67ec026b7e2554aaa2322f86b3fba919b5e0/packages/utils/src/object/index.ts#L61)

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

## Example

```更多示例```
{@include ../../docs/test/object/deepMerge.md}
