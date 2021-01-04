import startOfWeek from "../startOf/startOfWeek";
import getTimezoneOffsetInMilliseconds from "../../utils/getTimezoneOffsetInMilliseconds";
import requiredArgs from "../../utils/requiredArgs";

var MILLISECONDS_IN_WEEK = 604800000

export default function differenceInCalendarWeeks(
  dirtyDateLeft,
  dirtyDateRight,
  dirtyOptions
) {
  requiredArgs(2, arguments)

  var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions)
  var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions)

  var timestampLeft =
    startOfWeekLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfWeekLeft)
  var timestampRight =
    startOfWeekRight.getTime() -
    getTimezoneOffsetInMilliseconds(startOfWeekRight)

  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
}
