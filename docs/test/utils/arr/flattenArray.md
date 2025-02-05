#### 用例1-空数组

```typescript

const value: unknown[] = []
console.log(flattenArray(value))

/* output => [] */
```

#### 用例2-三维数组

```typescript

const value = [
  [1, 2, [7, 8]],
  [[9, '10'], 3, 4],
  [5, 6]
]
console.log(flattenArray(value))

/* output => [1, 2, 7, 8, 9, '10', 3, 4, 5, 6] */
```

#### 用例3-递归数组

```typescript

const value = [1, [2, [3, [4, [5, [6, [7, ['8']]]]]]]]
console.log(flattenArray(value))

/* output => [1, 2, 3, 4, 5, 6, 7, '8'] */
```

