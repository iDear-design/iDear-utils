import toDate from "../toDate";
import requiredArgs from "../../utils/requiredArgs";

export default function getDecade(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var year = date.getFullYear()
  var decade = Math.floor(year / 10) * 10
  return decade
}
