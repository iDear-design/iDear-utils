import requiredArgs from "../../utils/requiredArgs";
import toInteger from "../../utils/toInteger";
import subMonths from "./subMonths";
import subDays from "./subDays";
import toDate from "../toDate";

export default function sub(dirtyDate, duration) {
  requiredArgs(2, arguments)

  if (!duration || typeof duration !== 'object') return new Date(NaN)

  const years = 'years' in duration ? toInteger(duration.years) : 0
  const months = 'months' in duration ? toInteger(duration.months) : 0
  const weeks = 'weeks' in duration ? toInteger(duration.weeks) : 0
  const days = 'days' in duration ? toInteger(duration.days) : 0
  const hours = 'hours' in duration ? toInteger(duration.hours) : 0
  const minutes = 'minutes' in duration ? toInteger(duration.minutes) : 0
  const seconds = 'seconds' in duration ? toInteger(duration.seconds) : 0

  // Subtract years and months
  const dateWithoutMonths = subMonths(toDate(dirtyDate), months + years * 12)

  // Subtract weeks and days
  const dateWithoutDays = subDays(dateWithoutMonths, days + weeks * 7)

  // Subtract hours, minutes and seconds
  const minutestoSub = minutes + hours * 60
  const secondstoSub = seconds + minutestoSub * 60
  const mstoSub = secondstoSub * 1000
  const finalDate = new Date(dateWithoutDays.getTime() - mstoSub)

  return finalDate
}
