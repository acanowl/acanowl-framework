[**@acanowl/utils**](../../README.md)

***

# Function: isDefined()

> **isDefined**\<`T`\>(`value`): `value is T`

Defined in: [valid/index.ts:115](https://github.com/acanowl/acanowl-framework/blob/56fbec47a32608dccbd714bce431df6d253fa988/packages/utils/src/valid/index.ts#L115)

是否定义(不为null, undefined)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `undefined` \| `null` \| `T` |  |

## Returns

`value is T`

true | false

## Example

```更多示例```
### isDefined regExp, 返回 true

```typescript
const regExp = /regExp/
console.log(isDefined(regExp))

/* output => true */
```

### isDefined string, 返回 true

```typescript
const string = 'string'
console.log(isDefined(string))

/* output => true */
```

### isDefined nullValue, 返回 false

```typescript
const nullValue = null
console.log(isDefined(nullValue))

/* output => false */
```

### isDefined undefinedValue, 返回 false

```typescript
const undefinedValue = undefined
console.log(isDefined(undefinedValue))

/* output => false */
```
