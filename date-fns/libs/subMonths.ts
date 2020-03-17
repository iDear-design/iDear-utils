import requiredArgs from "../utils/requiredArgs";
import toInteger from "../utils/toInteger";
import addMonths from "./addMonths";

export default function subMonths(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments)

  var amount = toInteger(dirtyAmount)
  return addMonths(dirtyDate, -amount)
}
