import requiredArgs from "../../utils/requiredArgs";
import toInteger from "../../utils/toInteger";
import toDate from "../toDate";

export default function setMinutes(dirtyDate, dirtyMinutes) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var minutes = toInteger(dirtyMinutes)
  date.setMinutes(minutes)
  return date
}
