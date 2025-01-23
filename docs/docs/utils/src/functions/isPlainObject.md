[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isPlainObject

# Function: isPlainObject()

> **isPlainObject**(`value`): `value is PlainObject`

Defined in: [utils/src/valid/index.ts:24](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/valid/index.ts#L24)

是否是纯对象

## Parameters

### value

`unknown`

## Returns

`value is PlainObject`

true | false

## Example

```更多示例```
#### 用例1-空对象

```typescript
const value = {}
console.log(isPlainObject(value))

/* output => true */
```

#### 用例2-有效对象

```typescript
const value = { a: 1 }
console.log(isPlainObject(value))

/* output => true */
```

#### 用例3-有效数组

```typescript
const value = [1]
console.log(isPlainObject(value))

/* output => false */
```
