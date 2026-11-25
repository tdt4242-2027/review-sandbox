export function oldParseDate(input: string): Date {
  const parts = input.split("-");
  return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
}

export function oldIsWeekend(date: Date): boolean {
  return date.getDay() === 0 || date.getDay() === 6;
}
