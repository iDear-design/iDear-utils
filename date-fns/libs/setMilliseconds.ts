import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";
import toInteger from "../utils/toInteger";

export default function setMilliseconds(dirtyDate, dirtyMilliseconds) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var milliseconds = toInteger(dirtyMilliseconds)
  date.setMilliseconds(milliseconds)
  return date
}
