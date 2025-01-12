import type { PlainObject } from '@acanowl/types'
import { isArray, isPlainObject } from '@acanowl/utils'
import Table from 'cli-table'

export const useCliTable = (items: PlainObject | unknown[] | undefined) => {
  if (items) {
    const table = new Table()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let tableList: any[] = []
    if (isPlainObject(items)) {
      tableList = Object.entries(items)
    }
    if (isArray(items)) {
      tableList = items
    }
    tableList.forEach((item) => table.push(item))
    return table.toString()
  }
  return ''
}
