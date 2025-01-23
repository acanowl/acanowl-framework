[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isValidString

# Function: isValidString()

> **isValidString**(`value`): `value is string`

Defined in: [utils/src/valid/index.ts:69](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/valid/index.ts#L69)

是否是有效字符串

## Parameters

### value

`unknown`

## Returns

`value is string`

true | false

## Example

```更多示例```
#### 用例1-有效字符串

```typescript
const value = 'string'
console.log(isValidString(value))

/* output => true */
```

#### 用例2-无效字符串

```typescript
const value = ''
console.log(isValidString(value))

/* output => false */
```

#### 用例3-空格字符串

```typescript
const value = '  '
console.log(isValidString(value))

/* output => false */
```

#### 用例4-数字

```typescript
const value = 1
console.log(isValidString(value))

/* output => false */
```
