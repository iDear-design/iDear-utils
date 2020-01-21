import toDate from "./toDate";
import requiredArgs from "./_libs/requiredArgs";

export default function getDaysInMonth(dirtyDate: Date | number): number {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const year = date.getFullYear()
  const monthIndex = date.getMonth()
  const lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}
