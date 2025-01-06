export type GenFn<In, Out = In> = (v: In) => Out

export type PlainObject<T = unknown, K extends string | number | symbol = string> = Record<K, T>
