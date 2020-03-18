import requiredArgs from "../utils/requiredArgs";
import startOfYear from "./startOfYear";
import endOfYear from "./endOfYear";
import eachWeekendOfInterval from "./eachWeekendOfInterval";

export default function eachWeekendOfYear(dirtyDate) {
  requiredArgs(1, arguments)

  var startDate = startOfYear(dirtyDate)
  if (isNaN(startDate)) throw new RangeError('The passed date is invalid')

  var endDate = endOfYear(dirtyDate)
  return eachWeekendOfInterval({ start: startDate, end: endDate })
}
