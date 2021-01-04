import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";

export default function lastDayOfDecade(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var year = date.getFullYear()
  var decade = 9 + Math.floor(year / 10) * 10
  date.setFullYear(decade + 1, 0, 0)
  date.setHours(0, 0, 0, 0)
  return date
}
