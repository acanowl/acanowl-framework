import { describe, expect, test } from 'vitest'

import { flattenArray } from '../../dist'
describe('flattenArray', () => {
  test('用例1-空数组', () => {
    const value: unknown[] = []
    expect(flattenArray(value)).toEqual([])
  })
  test('用例2-三维数组', () => {
    const value = [
      [1, 2, [7, 8]],
      [[9, '10'], 3, 4],
      [5, 6]
    ]
    expect(flattenArray(value)).toEqual([1, 2, 7, 8, 9, '10', 3, 4, 5, 6])
  })
  test('用例3-递归数组', () => {
    const value = [1, [2, [3, [4, [5, [6, [7, ['8']]]]]]]]
    expect(flattenArray(value)).toEqual([1, 2, 3, 4, 5, 6, 7, '8'])
  })
})
