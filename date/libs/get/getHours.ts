import toDate from "../toDate";
import requiredArgs from "../../utils/requiredArgs";

export default function getHours(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var hours = date.getHours()
  return hours
}
