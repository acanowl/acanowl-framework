[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isString

# Function: isString()

> **isString**(`value`): `value is string`

Defined in: [utils/src/valid/index.ts:58](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/valid/index.ts#L58)

是否是字符串

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
const value: string = 'string'
console.log(isString(value))

/* output => true */
```

#### 用例2-无效字符串

```typescript
const value: string = ''
console.log(isString(value))

/* output => true */
```

#### 用例3-有效数字

```typescript
const value: number = 1
console.log(isString(value))

/* output => false */
```
