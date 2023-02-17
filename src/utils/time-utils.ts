import { format } from 'date-fns';

export function isValidDate(date: Date) {
  return (
    (date instanceof Date || typeof date === 'string' || typeof date === 'number') &&
    !new Date(date)
  );
}

export function formatDate(date: Date, timeframe: 'quarterly' | 'weekly' | 'daily') {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  switch (timeframe) {
    case 'quarterly':
      return format(date, 'QQQ yyyy');
    case 'weekly':
      return format(date, 'MMM d');
    case 'daily':
      return format(date, 'MMMM dd, yyyy');
    default:
      return date.toLocaleDateString();
  }
}

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
