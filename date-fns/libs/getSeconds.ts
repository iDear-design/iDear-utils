import toDate from "./toDate";
import requiredArgs from "./_libs/requiredArgs";

export default function getSeconds(dirtyDate) {
  requiredArgs(1, arguments)

  var date = toDate(dirtyDate)
  var seconds = date.getSeconds()
  return seconds
}
