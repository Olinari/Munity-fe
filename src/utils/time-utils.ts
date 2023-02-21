const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const;

export function getHourOfDay(hourNumber: number) {
  if (hourNumber < 0 || hourNumber > 23) {
    console.error('Invalid hour number, must be between 0 and 23');
    return null;
  }

  const hour = hourNumber % 12;
  const period = hourNumber >= 12 ? 'PM' : 'AM';

  return `${hour === 0 ? 12 : hour}:00-${
    (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12
  }:00 ${period}`;
}

export function getDayOfWeek(dayNumber: number) {
  if (dayNumber < 1 || dayNumber > 7) {
    console.error('Invalid hour number, must be between 1 and 7');
    return null;
  }

  return daysOfTheWeek[dayNumber - 1];
}
