import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";

export default function startOfQuarter(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const currentMonth = date.getMonth()
  const month = currentMonth - (currentMonth % 3)
  date.setMonth(month, 1)
  date.setHours(0, 0, 0, 0)
  return date
}
