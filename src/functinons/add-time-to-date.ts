export type TimeUnit =
  | "hour"
  | "minute"
  | "second"
  | "millisecond"
  | "day"
  | "week"
  | "month"
  | "year";

const timeUnitMap = new Map<TimeUnit, (date: Date, value: number) => Date>([
  ["hour", (date, value) => (date.setHours(date.getHours() + value), date)],
  ["minute", (date, value) => (date.setMinutes(date.getMinutes() + value), date)],
  ["second", (date, value) => (date.setSeconds(date.getSeconds() + value), date)],
  ["millisecond", (date, value) => (date.setMilliseconds(date.getMilliseconds() + value), date)],
  ["day", (date, value) => (date.setDate(date.getDate() + value), date)],
  ["week", (date, value) => (date.setDate(date.getDate() + value * 7), date)],
  ["month", (date, value) => (date.setMonth(date.getMonth() + value), date)],
  ["year", (date, value) => (date.setFullYear(date.getFullYear() + value), date)],
]);

export function addTimeToDate<T extends TimeUnit>(date: Date, value: number, unit: T): Date {
  const action = timeUnitMap.get(unit);
  if (!action) throw new Error("Invalid time unit");
  return action(date, value);
}
