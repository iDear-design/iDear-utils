import toDate from "./toDate";
import requiredArgs from "./_libs/requiredArgs";

export default function isWeekend(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var day = date.getDay()
  return day === 0 || day === 6
}
