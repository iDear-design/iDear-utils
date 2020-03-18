import toDate from "./toDate";
import endOfDay from "./endOf/endOfDay";
import endOfMonth from "./endOf/endOfMonth";
import requiredArgs from "../utils/requiredArgs";

export default function isLastDayOfMonth(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  return endOfDay(date).getTime() === endOfMonth(date).getTime()
}
