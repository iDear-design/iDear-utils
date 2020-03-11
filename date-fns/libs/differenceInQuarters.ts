import requiredArgs from "../utils/requiredArgs";
import differenceInMonths from "./differenceInMonths";

export default function differenceInQuarters(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  var diff = differenceInMonths(dirtyDateLeft, dirtyDateRight) / 3
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}
