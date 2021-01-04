import requiredArgs from "../../utils/requiredArgs";
import setMonth from "./setMonth";
import toDate from "../toDate";
import toInteger from "../../utils/toInteger"

export default function set(dirtyDate, values) {
  requiredArgs(2, arguments)

  if (typeof values !== 'object' || values === null) {
    throw new RangeError('values parameter must be an object')
  }

  var date = toDate(dirtyDate)

  // Check if date is Invalid Date because Date.prototype.setFullYear ignores the value of Invalid Date
  if (isNaN(date)) {
    return new Date(NaN)
  }

  if (values.year != null) {
    date.setFullYear(values.year)
  }

  if (values.month != null) {
    date = setMonth(date, values.month)
  }

  if (values.date != null) {
    date.setDate(toInteger(values.date))
  }

  if (values.hours != null) {
    date.setHours(toInteger(values.hours))
  }

  if (values.minutes != null) {
    date.setMinutes(toInteger(values.minutes))
  }

  if (values.seconds != null) {
    date.setSeconds(toInteger(values.seconds))
  }

  if (values.milliseconds != null) {
    date.setMilliseconds(toInteger(values.milliseconds))
  }

  return date
}
