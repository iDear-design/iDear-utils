import toDate from "./toDate";
import differenceInCalendarISOWeekYears from "./differenceInCalendarISOWeekYears";
import compareAsc from "./compareAsc";
import subISOWeekYears from "./subISOWeekYears";
import requiredArgs from "../utils/requiredArgs";

export default function differenceInISOWeekYears(
  dirtyDateLeft,
  dirtyDateRight
) {
  requiredArgs(2, arguments)

  var dateLeft = toDate(dirtyDateLeft)
  var dateRight = toDate(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(
    differenceInCalendarISOWeekYears(dateLeft, dateRight)
  )
  dateLeft = subISOWeekYears(dateLeft, sign * difference)

  var isLastISOWeekYearNotFull = compareAsc(dateLeft, dateRight) === -sign
  var result = sign * (difference - isLastISOWeekYearNotFull)
  // Prevent negative zero
  return result === 0 ? 0 : result
}
