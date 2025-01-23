[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isNumber

# Function: isNumber()

> **isNumber**(`value`): `value is number`

Defined in: [utils/src/valid/index.ts:80](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/valid/index.ts#L80)

是否是数字

## Parameters

### value

`unknown`

## Returns

`value is number`

true | false

## Example

```更多示例```
#### 用例1-有效数字

```typescript
const value: number = 1
console.log(isNumber(value))

/* output => true */
```

#### 用例2-无效数字NaN

```typescript
const value = NaN
console.log(isNumber(value))

/* output => true */
```

#### 用例3-数字0

```typescript
const value: number = 0
console.log(isNumber(value))

/* output => true */
```

#### 用例4-有效字符串

```typescript
const value: string = 'string'
console.log(isNumber(value))

/* output => false */
```
