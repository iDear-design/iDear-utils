import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";

export default function lastDayOfQuarter(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - (currentMonth % 3) + 3
  date.setMonth(month, 0)
  date.setHours(0, 0, 0, 0)
  return date
}
