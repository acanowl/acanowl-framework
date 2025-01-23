[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isRegExp

# Function: isRegExp()

> **isRegExp**(`value`): `value is RegExp`

Defined in: [utils/src/valid/index.ts:158](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/valid/index.ts#L158)

是否是正则表达式

## Parameters

### value

`unknown`

## Returns

`value is RegExp`

true | false

## Example

```更多示例```
#### 用例1-正则

```typescript
const value = /regExp/
console.log(isRegExp(value))

/* output => true */
```

#### 用例2-有效字符串

```typescript
const value: string = 'string'
console.log(isRegExp(value))

/* output => false */
```
