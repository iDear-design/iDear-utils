import toDate from "./toDate";
import requiredArgs from "../utils/requiredArgs";

export default function areIntervalsOverlapping(
  dirtyIntervalLeft: Interval,
  dirtyIntervalRight: Interval,
  options = {inclusive: false}
): boolean {
  requiredArgs(2, arguments)

  const intervalLeft = dirtyIntervalLeft || {}
  const intervalRight = dirtyIntervalRight || {}
  const leftStartTime = toDate(intervalLeft.start).getTime()
  const leftEndTime = toDate(intervalLeft.end).getTime()
  const rightStartTime = toDate(intervalRight.start).getTime()
  const rightEndTime = toDate(intervalRight.end).getTime()

  // Throw an exception if start date is after end date or if any date is `Invalid Date`
  if (!(leftStartTime <= leftEndTime && rightStartTime <= rightEndTime)) {
    throw new RangeError('Invalid interval')
  }

  if (options.inclusive) {
    return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime
  }

  return leftStartTime < rightEndTime && rightStartTime < leftEndTime
}
