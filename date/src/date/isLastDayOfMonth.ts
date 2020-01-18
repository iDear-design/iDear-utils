import toDate from "./toDate";
import endOfDay from "./endOfDay";
import endOfMonth from "./endOfMonth";
import requiredArgs from "./_libs/requiredArgs";

export default function isLastDayOfMonth(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  return endOfDay(date).getTime() === endOfMonth(date).getTime()
}
