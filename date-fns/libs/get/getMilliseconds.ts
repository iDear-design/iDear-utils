import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";

export default function getMilliseconds(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var milliseconds = date.getMilliseconds()
  return milliseconds
}
