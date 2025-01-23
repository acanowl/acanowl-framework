[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isDate

# Function: isDate()

> **isDate**(`value`): `value is Date`

Defined in: [utils/src/valid/index.ts:136](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/valid/index.ts#L136)

是否是日期对象

## Parameters

### value

`unknown`

## Returns

`value is Date`

true | false

## Example

```更多示例```
#### 用例1-有效时间对象

```typescript
const value = new Date()
console.log(isDate(value))

/* output => true */
```

#### 用例2-无效时间对象

```typescript
const value = new Date('error')
console.log(isDate(value))

/* output => true */
```

#### 用例3-有效字符串

```typescript
const value: string = 'string'
console.log(isDate(value))

/* output => false */
```
