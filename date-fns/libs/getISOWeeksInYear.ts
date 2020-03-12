import requiredArgs from "../utils/requiredArgs";
import startOfISOWeekYear from "./startOfISOWeekYear";
import addWeeks from "./addWeeks";

var MILLISECONDS_IN_WEEK = 604800000

export default function getISOWeeksInYear(dirtyDate) {
  requiredArgs(1, arguments)

  var thisYear = startOfISOWeekYear(dirtyDate)
  var nextYear = startOfISOWeekYear(addWeeks(thisYear, 60))
  var diff = nextYear.valueOf() - thisYear.valueOf()
  // Round the number of weeks to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK)
}
