import requiredArgs from "../../utils/requiredArgs";
import toInteger from "../../utils/toInteger";
import toDate from "../toDate";

export default function setHours(dirtyDate, dirtyHours) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var hours = toInteger(dirtyHours)
  date.setHours(hours)
  return date
}
