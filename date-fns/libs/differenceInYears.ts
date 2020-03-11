import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";
import compareAsc from "./compareAsc";
import differenceInCalendarYears from "./differenceInCalendarYears";

export default function differenceInYears(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  var dateLeft = toDate(dirtyDateLeft)
  var dateRight = toDate(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight))

  // Set both dates to a valid leap year for accurate comparison when dealing
  // with leap days
  dateLeft.setFullYear('1584')
  dateRight.setFullYear('1584')

  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastYearNotFull = compareAsc(dateLeft, dateRight) === -sign
  var result = sign * (difference - isLastYearNotFull)
  // Prevent negative zero
  return result === 0 ? 0 : result
}
