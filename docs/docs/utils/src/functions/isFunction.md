[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isFunction

# Function: isFunction()

> **isFunction**\<`T`\>(`value`): `value is GenFn<T>`

Defined in: [utils/src/valid/index.ts:103](https://github.com/acanowl/acanowl-framework/blob/c79152f4a5639ba2e312f011a139bf95a1b76935/packages/utils/src/valid/index.ts#L103)

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
#### func

```typescript
const func = function () {}
console.log(isFunction(func))

/* output => true */
```

#### asyncfunc

```typescript
const asyncfunc = async function () {}
console.log(isFunction(asyncfunc))

/* output => true */
```

#### nullValue

```typescript
const nullValue = null
console.log(isFunction(nullValue))

/* output => false */
```
