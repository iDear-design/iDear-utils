import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";

export default function eachDayOfInterval(dirtyInterval, options) {
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

  var step = options && 'step' in options ? Number(options.step) : 1
  if (step < 1 || isNaN(step))
    throw new RangeError('`options.step` must be a number greater than 1')

  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate))
    currentDate.setDate(currentDate.getDate() + step)
    currentDate.setHours(0, 0, 0, 0)
  }

  return dates
}
