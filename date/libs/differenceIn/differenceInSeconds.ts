import requiredArgs from "../../utils/requiredArgs";
import differenceInMilliseconds from "./differenceInMilliseconds";

export default function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
  requiredArgs(2, arguments)

  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}
