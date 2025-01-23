[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / deepClone

# Function: deepClone()

> **deepClone**\<`T`\>(`obj`): `T`

Defined in: [utils/src/object/index.ts:13](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/object/index.ts#L13)

深度克隆

## Type Parameters

• **T**

## Parameters

### obj

`T`

要克隆的对象

## Returns

`T`

克隆后的对象

## Example

```更多示例```
#### objectValue1

```typescript
const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
console.log(deepClone(objectValue))

/* output => { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' } */
```

#### cloneValue1 === objectValue1

```typescript
const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
const cloneValue = deepClone(objectValue)
console.log(cloneValue === objectValue)

/* output => false */
```

#### cloneValue1.b === objectValue1.b

```typescript
const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
const cloneValue = deepClone(objectValue)
console.log(cloneValue.b === objectValue.b)

/* output => false */
```
