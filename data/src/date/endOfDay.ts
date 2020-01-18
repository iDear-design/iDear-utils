import toDate from "./toDate";
import requiredArgs from "./_libs/requiredArgs";

export default function endOfDay(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  date.setHours(23, 59, 59, 999)
  return date
}
