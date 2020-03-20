import requiredArgs from "../../utils/requiredArgs";
import startOfWeek from "../startOf/startOfWeek";

export default function isSameWeek(
  dirtyDateLeft,
  dirtyDateRight,
  dirtyOptions
) {
  requiredArgs(2, arguments)

  var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, dirtyOptions)
  var dateRightStartOfWeek = startOfWeek(dirtyDateRight, dirtyOptions)

  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()
}
