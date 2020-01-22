import toDate from "./toDate";
import requiredArgs from "../utils/requiredArgs";

export default function getISODay(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var day = date.getDay()

  if (day === 0) {
    day = 7
  }

  return day
}
