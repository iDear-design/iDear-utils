import startOfDay from "../startOf/startOfDay";
import requiredArgs from "../../utils/requiredArgs";
import getTimezoneOffsetInMilliseconds from "../../utils/getTimezoneOffsetInMilliseconds";

var MILLISECONDS_IN_DAY = 86400000

export default function differenceInCalendarDays(dirtyDateLeft: Date | number, dirtyDateRight: Date | number): number {
  requiredArgs(2, arguments)

  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft =
    startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft)
  var timestampRight =
    startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight)

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}
