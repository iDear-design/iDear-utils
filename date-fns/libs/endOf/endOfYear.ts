import toDate from "./toDate";
import requiredArgs from "../utils/requiredArgs";

export default function endOfYear(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var year = date.getFullYear()
  date.setFullYear(year + 1, 0, 0)
  date.setHours(23, 59, 59, 999)
  return date
}
