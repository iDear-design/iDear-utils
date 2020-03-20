import requiredArgs from "../../utils/requiredArgs";
import startOfISOWeekYear from "../startOf/startOfISOWeekYear";

export default function isSameISOWeekYear(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  var dateLeftStartOfYear = startOfISOWeekYear(dirtyDateLeft)
  var dateRightStartOfYear = startOfISOWeekYear(dirtyDateRight)

  return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime()
}
