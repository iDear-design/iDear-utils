import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";
import startOfWeek from "../startOf/startOfWeek";
import addWeeks from "../add/addWeeks";

export default function eachWeekOfInterval(dirtyInterval, options) {
  requiredArgs(1, arguments)

  var interval = dirtyInterval || {}
  var startDate = toDate(interval.start)
  var endDate = toDate(interval.end)

  var endTime = endDate.getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval')
  }

  var startDateWeek = startOfWeek(startDate, options)
  var endDateWeek = startOfWeek(endDate, options)

  // Some timezones switch DST at midnight, making start of day unreliable in these timezones, 3pm is a safe bet
  startDateWeek.setHours(15)
  endDateWeek.setHours(15)

  endTime = endDateWeek.getTime()

  var weeks = []

  var currentWeek = startDateWeek

  while (currentWeek.getTime() <= endTime) {
    currentWeek.setHours(0)
    weeks.push(toDate(currentWeek))
    currentWeek = addWeeks(currentWeek, 1)
    currentWeek.setHours(15)
  }

  return weeks
}
