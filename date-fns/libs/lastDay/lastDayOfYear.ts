import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";

export default function lastDayOfYear(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var year = date.getFullYear()
  date.setFullYear(year + 1, 0, 0)
  date.setHours(0, 0, 0, 0)
  return date
}
