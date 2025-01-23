[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / isObject

# Function: isObject()

> **isObject**(`value`): value is PlainObject \| unknown\[\]

Defined in: [utils/src/valid/index.ts:46](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/valid/index.ts#L46)

是否是对象(不包括null, Date, RegExp)

## Parameters

### value

`unknown`

## Returns

value is PlainObject \| unknown\[\]

true | false

## Example

```更多示例```
#### 用例1-空对象

```typescript
const value = {}
console.log(isObject(value))

/* output => true */
```

#### 用例2-有效对象

```typescript
const value = { a: 1 }
console.log(isObject(value))

/* output => true */
```

#### 用例3-有效数组

```typescript
const value = [1]
console.log(isObject(value))

/* output => true */
```

#### 用例4-有效时间对象

```typescript
const value = new Date()
console.log(isObject(value))

/* output => false */
```

#### 用例-Null

```typescript
const value = null
console.log(isObject(value))

/* output => false */
```
