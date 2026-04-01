const jalaliDateTimeFormatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

const jalaliMonthDayFormatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
  day: 'numeric',
  month: 'long',
  timeZone: 'UTC',
});

const jalaliYearFormatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatJalaliDate(date: string): string {
  return jalaliDateTimeFormatter.format(new Date(date));
}

export function formatJalaliMonthDay(date: string): string {
  return jalaliMonthDayFormatter.format(new Date(date));
}

export function formatJalaliYear(date: string): string {
  return jalaliYearFormatter.format(new Date(date));
}
