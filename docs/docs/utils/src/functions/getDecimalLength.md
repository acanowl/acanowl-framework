[**can-framework**](../../../README.md)

***

[can-framework](../../../modules.md) / [utils/src](../README.md) / getDecimalLength

# Function: getDecimalLength()

> **getDecimalLength**(`str`, `n`): `number`

Defined in: [utils/src/str/index.ts:15](https://github.com/acanowl/acanowl-framework/blob/803929d309daee638a276dd80756bc2cc91479c5/packages/utils/src/str/index.ts#L15)

获取小数位长度

## Parameters

### str

`unknown`

任意值

### n

`number` = `0`

小数位长度

## Returns

`number`

## 默认值: Value

```ts
0
```

## Example

```更多示例```
#### 用例1-数字

```typescript
const value = 12.3
console.log(getDecimalLength(value))

/* output => 1 */
```

#### 用例2-数字

```typescript
const value = 12.3
console.log(getDecimalLength(value, 2))

/* output => 2 */
```

#### 用例3-字符串

```typescript
const value = '12.345'
console.log(getDecimalLength(value, 1))

/* output => 1 */
```

#### 用例4-null

```typescript
const value = null
console.log(getDecimalLength(value, 3))

/* output => 0 */
```

#### 用例5-NaN

```typescript
const value = NaN
console.log(getDecimalLength(value, 3))

/* output => 0 */
```

#### 用例6-无效字符串

```typescript
const value = ''
console.log(getDecimalLength(value, 3))

/* output => 0 */
```

#### 用例7-空格

```typescript
const value = ''
console.log(getDecimalLength(value, 3))

/* output => 0 */
```
