import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";

export default function isWithinInterval(dirtyDate, dirtyInterval) {
  requiredArgs(2, arguments)

  var interval = dirtyInterval || {}
  var time = toDate(dirtyDate).getTime()
  var startTime = toDate(interval.start).getTime()
  var endTime = toDate(interval.end).getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval')
  }

  return time >= startTime && time <= endTime
}
