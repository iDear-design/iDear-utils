import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";

export default function lastDayOfMonth(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var month = date.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(0, 0, 0, 0)
  return date
}
