import { isPlainObject } from '../valid'

export const errorCatch = <T>(error: unknown): T => {
  if (error instanceof Error) {
    return (error.name + '：' + error.message) as T
  }
  if (isPlainObject(error)) {
    return (error.message || error.errMsg) as T
  }
  return error as T
}
