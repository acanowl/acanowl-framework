[**@acanowl/utils**](../../README.md)

***

# Function: isFunction()

> **isFunction**\<`T`\>(`value`): `value is GenFn<T>`

Defined in: [valid/index.ts:125](https://github.com/acanowl/acanowl-framework/blob/e83eea0b29b448bee66564c78f8f3ea4fab8f88b/packages/utils/src/valid/index.ts#L125)

是否是函数(包括AsyncFunction)

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `undefined` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` |  |

## Returns

`value is GenFn<T>`

true | false

## Example

```ts
isFunction(() => {})
outPut => true

isFunction(async () => {})
outPut => true

isFunction(1)
outPut => false
```
