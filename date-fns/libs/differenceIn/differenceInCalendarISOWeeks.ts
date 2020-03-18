import getTimezoneOffsetInMilliseconds from "../utils/getTimezoneOffsetInMilliseconds";
import startOfISOWeek from "./startOfISOWeeek";
import requiredArgs from "../utils/requiredArgs";

var MILLISECONDS_IN_WEEK = 604800000
export default function differenceInCalendarISOWeeks(
  dirtyDateLeft,
  dirtyDateRight
) {
  requiredArgs(2, arguments)

  var startOfISOWeekLeft = startOfISOWeek(dirtyDateLeft)
  var startOfISOWeekRight = startOfISOWeek(dirtyDateRight)

  var timestampLeft =
    startOfISOWeekLeft.getTime() -
    getTimezoneOffsetInMilliseconds(startOfISOWeekLeft)
  var timestampRight =
    startOfISOWeekRight.getTime() -
    getTimezoneOffsetInMilliseconds(startOfISOWeekRight)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
}
