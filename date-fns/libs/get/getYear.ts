import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";

export default function getYear(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var year = date.getFullYear()
  return year
}
