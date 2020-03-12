import requiredArgs from "../utils/requiredArgs";
import startOfISOWeeek from "./startOfISOWeeek";
import toDate from "./toDate";
import startOfISOWeekYear from "./startOfISOWeekYear";

var MILLISECONDS_IN_WEEK = 604800000

export default function getISOWeek(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var diff = startOfISOWeeek(date).getTime() - startOfISOWeekYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}
