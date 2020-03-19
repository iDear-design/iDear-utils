import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";
import addHours from "../add/addHours";

export default function eachHourOfInterval(dirtyInterval, options) {
  requiredArgs(1, arguments)

  const interval = dirtyInterval || {}
  const startDate = toDate(interval.start)
  const endDate = toDate(interval.end)

  const startTime = startDate.getTime()
  const endTime = endDate.getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval')
  }

  const dates = []

  let currentDate = startDate
  currentDate.setMinutes(0, 0, 0)

  const step = options && 'step' in options ? Number(options.step) : 1
  if (step < 1 || isNaN(step))
    throw new RangeError('`options.step` must be a number greater than 1')

  while (currentDate.getTime() <= endTime) {
    dates.push(toDate(currentDate))
    currentDate = addHours(currentDate, step)
  }

  return dates
}
