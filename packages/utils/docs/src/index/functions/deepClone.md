[**@acanowl/utils**](../../README.md)

***

# Function: deepClone()

> **deepClone**\<`T`\>(`obj`): `T`

Defined in: [object/index.ts:13](https://github.com/acanowl/acanowl-framework/blob/56fbec47a32608dccbd714bce431df6d253fa988/packages/utils/src/object/index.ts#L13)

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

```更多示例```
### deepClone objectValue1

```typescript
const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
console.log(deepClone(objectValue))

/* output => { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' } */
```

### cloneValue1 === objectValue1

```typescript
const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
const cloneValue = deepClone(objectValue)
console.log(cloneValue === objectValue)

/* output => false */
```

### cloneValue1.b === objectValue1.b

```typescript
const objectValue = { a: 1, b: { c: 2 }, d: [1, 2, 5], e: 'hello' }
const cloneValue = deepClone(objectValue)
console.log(cloneValue.b === objectValue.b)

/* output => false */
```
