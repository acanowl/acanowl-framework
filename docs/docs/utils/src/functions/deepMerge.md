[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / deepMerge

# Function: deepMerge()

> **deepMerge**\<`T`, `U`\>(`target`, `source`, `customizer`?): `T` & `U`

Defined in: [utils/src/object/index.ts:61](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/object/index.ts#L61)

深度合并

## Type Parameters

• **T**

• **U**

## Parameters

### target

`T`

目标对象

### source

`U`

源对象

### customizer?

[`Customizer`](../type-aliases/Customizer.md)\<`unknown`\>

数组合并自定义函数

## Returns

`T` & `U`

合并后的对象

## Example

```更多示例```
#### objectValue2

```typescript
const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
const objectValue2 = { b: { f: 3 }, d: [1, 4], e: 'world', g: true }
console.log(deepMerge(objectValue, objectValue2))

/* output => {
  a: 1,
  b: { c: 2, f: 3 },
  d: [1, 4],
  e: 'world',
  g: true
} */
```

#### objectValue2 concat

```typescript
const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
const objectValue2 = { b: { f: 3 }, d: [1, 4], e: 'world', g: true }

const customizer = (targetValue: unknown, sourceValue: unknown) => {
  if (isArray(targetValue) && isArray(sourceValue)) {
    return targetValue.concat(sourceValue)
  }
}
console.log(deepMerge(objectValue, objectValue2, customizer))

/* output => {
  a: 1,
  b: { c: 2, f: 3 },
  d: [1, 2, 5, 1, 4],
  e: 'world',
  g: true
} */
```

#### objectValue2 setCustomizer

```typescript
const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
const objectValue2 = { b: { f: 3 }, d: [1, 4], e: 'world', g: true }

const setCustomizer = (targetValue: unknown, sourceValue: unknown) => {
  if (isArray(targetValue) && isArray(sourceValue)) {
    return [...new Set([...targetValue, ...sourceValue])]
  }
}
console.log(deepMerge(objectValue, objectValue2, setCustomizer))

/* output => {
  a: 1,
  b: { c: 2, f: 3 },
  d: [1, 2, 5, 4],
  e: 'world',
  g: true
} */
```
