import { Result } from "@interfaces";

export function Catch<T = unknown>(
  fn: (...args: any[]) => T,
  errors?: ErrorConstructor[],
): Result<T> {
  try {
    return [fn(), undefined];
  } catch (err: unknown) {
    if (!errors || errors.some((errorType) => err instanceof errorType)) {
      return [undefined, err instanceof Error ? err : new Error(String(err))];
    }
    throw err;
  }
}
