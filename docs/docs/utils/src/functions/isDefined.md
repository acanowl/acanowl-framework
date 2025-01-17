[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isDefined

# Function: isDefined()

> **isDefined**\<`T`\>(`value`): `value is T`

Defined in: [utils/src/valid/index.ts:148](https://github.com/acanowl/acanowl-framework/blob/b5107a43a84c047f5172f446640c957c87bb9285/packages/utils/src/valid/index.ts#L148)

是否定义(不为null, undefined)

## Type Parameters

• **T**

## Parameters

### value

`undefined` | `null` | `T`

## Returns

`value is T`

true | false

## Example

```更多示例```
#### regExp

```typescript
const regExp = /regExp/
console.log(isDefined(regExp))

/* output => true */
```

#### string

```typescript
const string = 'string'
console.log(isDefined(string))

/* output => true */
```

#### nullValue

```typescript
const nullValue = null
console.log(isDefined(nullValue))

/* output => false */
```

#### undefinedValue

```typescript
const undefinedValue = undefined
console.log(isDefined(undefinedValue))

/* output => false */
```
