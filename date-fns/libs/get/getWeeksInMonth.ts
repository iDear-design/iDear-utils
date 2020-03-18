import requiredArgs from "../../utils/requiredArgs";
import differenceInCalendarWeeks from "../differenceIn/differenceInCalendarWeeks";
import isLastDayOfMonth from "../isLastDayOfMonth";
import startOfMonth from "../startOfMonth";

export default function getWeeksInMonth(date, options) {
  requiredArgs(1, arguments)

  return (
    differenceInCalendarWeeks(
      isLastDayOfMonth(date),
      startOfMonth(date),
      options
    ) + 1
  )
}
