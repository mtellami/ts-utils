import { Catch } from "./";
import { Result } from "../interfaces";

export function toJson<T = unknown>(jsonString: string): Result<T> {
  return Catch<T>(() => JSON.parse(jsonString));
}
