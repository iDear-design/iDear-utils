import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";
import toInteger from "../utils/toInteger";

export default function setDate(dirtyDate, dirtyDayOfMonth) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var dayOfMonth = toInteger(dirtyDayOfMonth)
  date.setDate(dayOfMonth)
  return date
}
