import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";
import toInteger from "../../utils/toInteger";
import setMonth from "./setMonth";

export default function setQuarter(dirtyDate, dirtyQuarter) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var quarter = toInteger(dirtyQuarter)
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1
  var diff = quarter - oldQuarter
  return setMonth(date, date.getMonth() + diff * 3)
}
