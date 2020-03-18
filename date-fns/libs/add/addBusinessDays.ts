import isWeekend from "./isWeekend";
import toDate from "./toDate";
import toInteger from "../utils/toInteger";
import requiredArgs from "../utils/requiredArgs";
import isSunday from "./isSunday";
import isSaturday from "./isSaturday";

export default function addBusinessDays(
  dirtyDate: Date | number,
  dirtyAmount: number
): Date {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const startedOnWeekend = isWeekend(date)
  const amount = toInteger(dirtyAmount)

  if (isNaN(amount)) return new Date(NaN)

  const hours = date.getHours()
  const sign = amount < 0 ? -1 : 1
  const fullWeeks = toInteger(amount / 5)

  date.setDate(date.getDate() + fullWeeks * 7)

  let restDays = Math.abs(amount % 5)

  while (restDays > 0) {
    date.setDate(date.getDate() + sign)
    if (!isWeekend(date)) restDays -= 1
  }

  if (startedOnWeekend && isWeekend(date) && amount !== 0) {
    if (isSaturday(date)) date.setDate(date.getDate() + (sign < 0 ? 2 : -1))
    if (isSunday(date)) date.setDate(date.getDate() + (sign < 0 ? 1 : -2))
  }

  // Restore hours to avoid DST lag
  date.setHours(hours)

  return date
}
