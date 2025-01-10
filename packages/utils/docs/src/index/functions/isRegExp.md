[**@acanowl/utils**](../../README.md)

***

# Function: isRegExp()

> **isRegExp**(`value`): `value is RegExp`

Defined in: [valid/index.ts:104](https://github.com/acanowl/acanowl-framework/blob/56fbec47a32608dccbd714bce431df6d253fa988/packages/utils/src/valid/index.ts#L104)

是否是正则表达式

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` |  |

## Returns

`value is RegExp`

true | false

## Example

```更多示例```
### isRegExp regExp, 返回 true

```typescript
const regExp = /regExp/
console.log(isRegExp(regExp))

/* output => true */
```

### isRegExp string, 返回 false

```typescript
const string = 'string'
console.log(isRegExp(string))

/* output => false */
```
