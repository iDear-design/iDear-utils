import requiredArgs from "../utils/requiredArgs";
import toInteger from "../utils/toInteger";
import toDate from "./toDate";

export default function setYear(dirtyDate, dirtyYear) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var year = toInteger(dirtyYear)

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(date)) {
    return new Date(NaN)
  }

  date.setFullYear(year)
  return date
}
