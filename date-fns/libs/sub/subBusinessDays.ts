import requiredArgs from "../../utils/requiredArgs";
import toInteger from "../../utils/toInteger";
import addBusinessDays from "../add/addBusinessDays";

export default function subBusinessDays(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments)

  var amount = toInteger(dirtyAmount)
  return addBusinessDays(dirtyDate, -amount)
}
