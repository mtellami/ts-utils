import { Result } from "../interfaces";

export async function asyncCatch<T = unknown>(
  fn: (...args: any[]) => Promise<T>,
  errors?: ErrorConstructor[],
): Promise<Result<T>> {
  try {
    const result = await fn();
    return [result, undefined];
  } catch (err: unknown) {
    if (!errors || errors.some((errorType) => err instanceof errorType)) {
      return [undefined, err instanceof Error ? err : new Error(String(err))];
    }
    throw err;
  }
}
