import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";

var MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000

export default function getOverlappingDaysInIntervals(
  dirtyIntervalLeft,
  dirtyIntervalRight
) {
  requiredArgs(2, arguments)

  var intervalLeft = dirtyIntervalLeft || {}
  var intervalRight = dirtyIntervalRight || {}
  var leftStartTime = toDate(intervalLeft.start).getTime()
  var leftEndTime = toDate(intervalLeft.end).getTime()
  var rightStartTime = toDate(intervalRight.start).getTime()
  var rightEndTime = toDate(intervalRight.end).getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) {
    throw new RangeError('Invalid interval')
  }

  var isOverlapping =
    leftStartTime < rightEndTime && rightStartTime < leftEndTime

  if (!isOverlapping) {
    return 0
  }

  var overlapStartDate =
    rightStartTime < leftStartTime ? leftStartTime : rightStartTime

  var overlapEndDate = rightEndTime > leftEndTime ? leftEndTime : rightEndTime

  var differenceInMs = overlapEndDate - overlapStartDate

  return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY)
}
