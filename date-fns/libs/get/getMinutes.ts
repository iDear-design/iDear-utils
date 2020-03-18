import toDate from "../toDate";
import requiredArgs from "../../utils/requiredArgs";

export default function getMinutes(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var minutes = date.getMinutes()
  return minutes
}
