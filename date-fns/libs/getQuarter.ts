import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";

export default function getQuarter(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var quarter = Math.floor(date.getMonth() / 3) + 1
  return quarter
}
