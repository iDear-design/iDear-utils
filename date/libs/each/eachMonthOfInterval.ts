import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";

export default function eachMonthOfInterval(dirtyInterval) {
  requiredArgs(1, arguments)

  var interval = dirtyInterval || {}
  var startDate = toDate(interval.start)
  var endDate = toDate(interval.end)

  var endTime = endDate.getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval')
  }

  var dates = []

  var currentDate = startDate
  currentDate.setHours(0, 0, 0, 0)
  currentDate.setDate(1)

  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate))
    currentDate.setMonth(currentDate.getMonth() + 1)
  }

  return dates
}
