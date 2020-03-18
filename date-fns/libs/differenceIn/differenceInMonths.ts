import toDate from "../toDate";
import differenceInCalendarMonths from "./differenceInCalendarMonths";
import compareAsc from "../compareAsc";
import requiredArgs from "../../utils/requiredArgs";

export default function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  var dateLeft = toDate(dirtyDateLeft)
  var dateRight = toDate(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight))
  dateLeft.setMonth(dateLeft.getMonth() - sign * difference)

  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign
  // @ts-ignore
  var result = sign * (difference - isLastMonthNotFull)
  // Prevent negative zero
  return result === 0 ? 0 : result
}
