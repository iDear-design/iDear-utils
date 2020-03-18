import requiredArgs from "../utils/requiredArgs";
import toInteger from "../utils/toInteger";
import toDate from "./toDate";

export default function setSeconds(dirtyDate, dirtySeconds) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var seconds = toInteger(dirtySeconds)
  date.setSeconds(seconds)
  return date
}
