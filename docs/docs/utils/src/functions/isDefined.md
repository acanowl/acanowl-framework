[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isDefined

# Function: isDefined()

> **isDefined**\<`T`\>(`value`): `value is T`

Defined in: [utils/src/valid/index.ts:169](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/valid/index.ts#L169)

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
#### 用例1-regExp

```typescript
const value = /regExp/
console.log(isDefined(value))

/* output => true */
```

#### 用例2-string

```typescript
const value: string = 'string'
console.log(isDefined(value))

/* output => true */
```

#### 用例3-Null

```typescript
const value = null
console.log(isDefined(value))

/* output => false */
```

#### 用例4-Undefined

```typescript
const value = undefined
console.log(isDefined(value))

/* output => false */
```
