import toDate from "../toDate";
import requiredArgs from "../../utils/requiredArgs";

export default function getMonth(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var month = date.getMonth()
  return month
}
