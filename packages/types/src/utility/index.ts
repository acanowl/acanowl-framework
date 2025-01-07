/**
 * 通用函数类型
 */
export type GenFn<In, Out = In> = (v: In) => Out

/**
 * 对象类型
 */
export type PlainObject<T = unknown, K extends string | number | symbol = string> = Record<K, T>

/**
 * 对象列表类型
 */
export type PlainObjectList<T> = Array<PlainObject<T>>
