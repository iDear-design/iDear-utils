import toDate from "./toDate";
import differenceInCalendarDays from "./differenceInCalendarDays";
import requiredArgs from "../utils/requiredArgs";

function compareLocalAsc(dateLeft, dateRight) {
  var diff =
    dateLeft.getFullYear() - dateRight.getFullYear() ||
    dateLeft.getMonth() - dateRight.getMonth() ||
    dateLeft.getDate() - dateRight.getDate() ||
    dateLeft.getHours() - dateRight.getHours() ||
    dateLeft.getMinutes() - dateRight.getMinutes() ||
    dateLeft.getSeconds() - dateRight.getSeconds() ||
    dateLeft.getMilliseconds() - dateRight.getMilliseconds()

  if (diff < 0) {
    return -1
  } else if (diff > 0) {
    return 1
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff
  }
}

export default function differenceInDays(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  var dateLeft = toDate(dirtyDateLeft)
  var dateRight = toDate(dirtyDateRight)

  var sign = compareLocalAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight))

  dateLeft.setDate(dateLeft.getDate() - sign * difference)

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastDayNotFull = compareLocalAsc(dateLeft, dateRight) === -sign
  var result = sign * (difference - isLastDayNotFull)
  // Prevent negative zero
  return result === 0 ? 0 : result
}
