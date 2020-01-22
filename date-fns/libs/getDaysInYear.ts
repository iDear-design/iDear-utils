import toDate from "./toDate";
import requiredArgs from "../utils/requiredArgs";
import isLeapYear from "./isLeapYear";

export default function getDaysInYear(dirtyDate: Date | number): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)

  if (String(new Date(date)) === 'Invalid Date') {
    return NaN
  }

  return isLeapYear(date) ? 366 : 365
}
