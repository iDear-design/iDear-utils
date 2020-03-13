import requiredArgs from "../utils/requiredArgs";
import toDate from "./toDate";
import isValid from "./isValid";
import compareAsc from "./compareAsc";
import differenceInYears from "./differenceInYears";
import differenceInMonths from "./differenceInMonths";
import sub from "./sub";
import differenceInDays from "./differenceInDays";
import differenceInHours from "./differenceInHours";
import differenceInMinutes from "./differenceInMinutes";
import differenceInSeconds from "./differenceInSeconds";

export default function intervalToDuration({ start, end }) {
  requiredArgs(1, arguments)

  const dateLeft = toDate(start)
  const dateRight = toDate(end)

  if (!isValid(dateLeft)) {
    throw new RangeError('Start Date is invalid')
  }
  if (!isValid(dateRight)) {
    throw new RangeError('End Date is invalid')
  }

  const duration = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  const sign = compareAsc(dateLeft, dateRight)

  duration.years = Math.abs(differenceInYears(dateLeft, dateRight))

  const remainingMonths = sub(dateLeft, { years: sign * duration.years })
  duration.months = Math.abs(differenceInMonths(remainingMonths, dateRight))

  const remainingDays = sub(remainingMonths, { months: sign * duration.months })
  duration.days = Math.abs(differenceInDays(remainingDays, dateRight))

  const remainingHours = sub(remainingDays, { days: sign * duration.days })
  duration.hours = Math.abs(differenceInHours(remainingHours, dateRight))

  const remainingMinutes = sub(remainingHours, { hours: sign * duration.hours })
  duration.minutes = Math.abs(differenceInMinutes(remainingMinutes, dateRight))

  const remainingSeconds = sub(remainingMinutes, {
    minutes: sign * duration.minutes
  })
  duration.seconds = Math.abs(differenceInSeconds(remainingSeconds, dateRight))

  return duration
}
