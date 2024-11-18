export type PickByValue<T, ValueType> = {
  [K in keyof T as T[K] extends ValueType ? K : never]: T[K];
};
