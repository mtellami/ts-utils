type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Omit<T, Keys> &
  { [K in Keys]: Required<Pick<T, K>> }[Keys];
