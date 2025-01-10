[**@acanowl/utils**](../../README.md)

***

# Function: isFunction()

> **isFunction**\<`T`\>(`value`): `value is GenFn<T>`

Defined in: [valid/index.ts:81](https://github.com/acanowl/acanowl-framework/blob/56fbec47a32608dccbd714bce431df6d253fa988/packages/utils/src/valid/index.ts#L81)

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

```更多示例```
### isFunction func, 返回 true

```typescript
const func = function () {}
console.log(isFunction(func))

/* output => true */
```

### isFunction asyncfunc, 返回 true

```typescript
const asyncfunc = async function () {}
console.log(isFunction(asyncfunc))

/* output => true */
```

### isFunction nullValue, 返回 false

```typescript
const nullValue = null
console.log(isFunction(nullValue))

/* output => false */
```
