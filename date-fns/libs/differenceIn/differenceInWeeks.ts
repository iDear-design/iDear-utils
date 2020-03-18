import requiredArgs from "../utils/requiredArgs";
import differenceInDays from "./differenceInDays";

export default function differenceInWeeks(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  var diff = differenceInDays(dirtyDateLeft, dirtyDateRight) / 7
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}
