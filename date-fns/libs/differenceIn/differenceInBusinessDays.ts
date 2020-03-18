import toDate from "./toDate";
import isValid from "./isValid";
import isWeekend from "./isWeekend";
import differenceInCalendarDays from "./differenceInCalendarDays";
import addDays from "./addDays";
import isSameDay from "./isSameDay";
import toInteger from "../utils/toInteger";
import requiredArgs from "../utils/requiredArgs";

export default function differenceInBusinessDays(dirtyDateLeft: Date | number, dirtyDateRight: Date | number) {
  requiredArgs(2, arguments)

  var dateLeft = toDate(dirtyDateLeft)
  var dateRight = toDate(dirtyDateRight)

  if (!isValid(dateLeft) || !isValid(dateRight)) return new Date(NaN)

  var calendarDifference = differenceInCalendarDays(dateLeft, dateRight)
  var sign = calendarDifference < 0 ? -1 : 1

  var weeks = toInteger(calendarDifference / 7)

  var result = weeks * 5
  dateRight = addDays(dateRight, weeks * 7)

  // the loop below will run at most 6 times to account for the remaining days that don't makeup a full week
  while (!isSameDay(dateLeft, dateRight)) {
    // sign is used to account for both negative and positive differences
    result += isWeekend(dateRight) ? 0 : sign
    dateRight = addDays(dateRight, sign)
  }

  return result === 0 ? 0 : result
}
