import requiredArgs from "../utils/requiredArgs";
import startOfMonth from "./startOfMonth";
import endOfMonth from "./endOfMonth";
import eachWeekendOfInterval from "./eachWeekendOfInterval";

export default function eachWeekendOfMonth(dirtyDate) {
  requiredArgs(1, arguments)

  var startDate = startOfMonth(dirtyDate)
  if (isNaN(startDate)) throw new RangeError('The passed date is invalid')

  var endDate = endOfMonth(dirtyDate)
  return eachWeekendOfInterval({ start: startDate, end: endDate })
}
