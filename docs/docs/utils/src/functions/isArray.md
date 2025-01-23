[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isArray

# Function: isArray()

> **isArray**(`value`): `value is unknown[]`

Defined in: [utils/src/valid/index.ts:35](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/valid/index.ts#L35)

是否是数组

## Parameters

### value

`unknown`

## Returns

`value is unknown[]`

true | false

## Example

```更多示例```
#### 用例1-空数组

```typescript
const value: unknown = []
console.log(isArray(value))

/* output => true */
```

#### 用例2-有效数组

```typescript
const value = [1]
console.log(isArray(value))

/* output => true */
```

#### 用例3-有效字符串

```typescript
const string: string = 'string'
console.log(isArray(string))

/* output => false */
```
