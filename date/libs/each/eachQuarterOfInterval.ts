import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";
import startOfQuarter from "../startOf/startOfQuarter";
import addQuarters from "../add/addQuarters";

export default function eachQuarterOfInterval(dirtyInterval) {
  requiredArgs(1, arguments)

  var interval = dirtyInterval || {}
  var startDate = toDate(interval.start)
  var endDate = toDate(interval.end)

  var endTime = endDate.getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(startDate.getTime() <= endTime)) {
    throw new RangeError('Invalid interval')
  }

  var startDateQuarter = startOfQuarter(startDate)
  var endDateQuarter = startOfQuarter(endDate)

  endTime = endDateQuarter.getTime()

  var quarters = []

  var currentQuarter = startDateQuarter

  while (currentQuarter.getTime() <= endTime) {
    quarters.push(toDate(currentQuarter))
    currentQuarter = addQuarters(currentQuarter, 1)
  }

  return quarters
}
