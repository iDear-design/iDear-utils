import requiredArgs from "../../utils/requiredArgs";
import startOfQuarter from "../startOf/startOfQuarter";

export default function isSameQuarter(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft)
  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight)

  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime()
}
