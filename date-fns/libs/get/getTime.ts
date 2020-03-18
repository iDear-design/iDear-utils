import toDate from "../toDate";
import requiredArgs from "../../utils/requiredArgs";

export default function getTime(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var timestamp = date.getTime()
  return timestamp
}
