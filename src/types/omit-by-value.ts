export type OmitByValue<T, ValueType> = {
  [K in keyof T as T[K] extends ValueType ? never : K]: T[K];
};
