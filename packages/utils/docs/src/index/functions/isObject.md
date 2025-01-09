[**@acanowl/utils**](../../README.md)

***

# Function: isObject()

> **isObject**(`value`): value is PlainObject \| unknown\[\]

Defined in: [valid/index.ts:57](https://github.com/acanowl/acanowl-framework/blob/e83eea0b29b448bee66564c78f8f3ea4fab8f88b/packages/utils/src/valid/index.ts#L57)

是否是对象(不包括null, Date, RegExp)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` |  |

## Returns

value is PlainObject \| unknown\[\]

true | false

## Example

```ts
isObject({})
outPut => true

isObject([])
outPut => true

isObject(null)
outPut => false

isObject(new Date())
outPut => false
```
