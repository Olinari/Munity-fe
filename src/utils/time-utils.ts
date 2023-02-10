import { format } from "date-fns";

export function isValidDate(date) {
  return (
    (date instanceof Date ||
      typeof date === "string" ||
      typeof date === "number") &&
    !isNaN(new Date(date))
  );
}

export function formatDate(date, timeframe) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  switch (timeframe) {
    case "quarterly":
      return format(date, "QQQ yyyy");
    case "weekly":
      return format(date, "MMM d");
    case "daily":
      return format(date, "MMMM dd, yyyy");
    default:
      return date.toLocaleDateString();
  }
}

export function formatTimestamp(timestamp = Date.now()) {
  return format(timestamp, "dd-MM-yyyy-HH-mm-ss");
}

export function sortDates(from, to) {
  const dates = [new Date(from), new Date(to)].sort(
    (last, current) => last.getTime() - current.getTime()
  );
  // make slight change to validate dates are not equal
  dates[1].setHours(23, 59, 59, 999);
  return dates;
}

export function getHourOfDay(hourNumber) {
  if (hourNumber < 0 || hourNumber > 23) {
    console.error("Invalid hour number, must be between 0 and 23");
    return null;
  }

  const hour = hourNumber % 12;
  const period = hourNumber >= 12 ? "PM" : "AM";

  return `${hour === 0 ? 12 : hour}:00-${
    (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12
  }:00 ${period}`;
}
