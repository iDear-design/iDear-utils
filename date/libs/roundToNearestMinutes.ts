import toInteger from "../utils/toInteger";
import toDate from "./toDate";

export default function roundToNearestMinutes(dirtyDate, options) {
  if (arguments.length < 1) {
    throw new TypeError('1 argument required, but only none provided present')
  }

  var nearestTo =
    options && 'nearestTo' in options ? toInteger(options.nearestTo) : 1

  if (nearestTo < 1 || nearestTo > 30) {
    throw new RangeError('`options.nearestTo` must be between 1 and 30')
  }

  var date = toDate(dirtyDate)
  var seconds = date.getSeconds() // relevant if nearestTo is 1, which is the default case
  var minutes = date.getMinutes() + seconds / 60
  var roundedMinutes = Math.floor(minutes / nearestTo) * nearestTo
  var remainderMinutes = minutes % nearestTo
  var addedMinutes = Math.round(remainderMinutes / nearestTo) * nearestTo

  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    roundedMinutes + addedMinutes
  )
}
