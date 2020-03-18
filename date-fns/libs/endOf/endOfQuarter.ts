import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";

export default function endOfQuarter(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const currentMonth = date.getMonth()
  const month = currentMonth - (currentMonth % 3) + 3
  date.setMonth(month, 0)
  date.setHours(23, 59, 59, 999)
  return date
}
