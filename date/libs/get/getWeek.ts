import startOfWeek from "../startOf/startOfWeek";
import startOfWeekYear from "../startOf/startOfWeekYear";
import toDate from "../toDate";
import requiredArgs from "../../utils/requiredArgs";

var MILLISECONDS_IN_WEEK = 604800000

export default function getWeek(dirtyDate, options) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var diff =
    startOfWeek(date, options).getTime() -
    startOfWeekYear(date, options).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}
