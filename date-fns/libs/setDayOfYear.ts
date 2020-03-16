import requiredArgs from "../utils/requiredArgs";
import toInteger from "../utils/toInteger";
import toDate from "./toDate";

export default function setDayOfYear(dirtyDate, dirtyDayOfYear) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var dayOfYear = toInteger(dirtyDayOfYear)
  date.setMonth(0)
  date.setDate(dayOfYear)
  return date
}
