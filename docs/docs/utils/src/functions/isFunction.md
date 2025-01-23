[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isFunction

# Function: isFunction()

> **isFunction**\<`T`\>(`value`): `value is GenFn<T>`

Defined in: [utils/src/valid/index.ts:124](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/valid/index.ts#L124)

是否是函数(包括AsyncFunction)

## Type Parameters

• **T** = `undefined`

## Parameters

### value

`unknown`

## Returns

`value is GenFn<T>`

true | false

## Example

```更多示例```
#### 用例1-普通函数

```typescript
const value = function () {}
console.log(isFunction(value))

/* output => true */
```

#### 用例2-异步函数

```typescript
const value = async function () {}
console.log(isFunction(value))

/* output => true */
```

#### 用例3-Null

```typescript
const value = null
console.log(isFunction(value))

/* output => false */
```
