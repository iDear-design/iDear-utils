import addDays from "./addDays";
import addMonths from "./addMonths";
import toDate from "./toDate";
import requiredArgs from "../utils/requiredArgs";
import toInteger from "../utils/toInteger";
import {Duration} from "./types";

export default function add(
  dirtyDate: Date | number,
  duration: Duration
): Date {
  requiredArgs(2, arguments)

  if (!duration || typeof duration !== 'object') return new Date(NaN)

  const years = 'years' in duration ? toInteger(duration.years) : 0
  const months = 'months' in duration ? toInteger(duration.months) : 0
  const weeks = 'weeks' in duration ? toInteger(duration.weeks) : 0
  const days = 'days' in duration ? toInteger(duration.days) : 0
  const hours = 'hours' in duration ? toInteger(duration.hours) : 0
  const minutes = 'minutes' in duration ? toInteger(duration.minutes) : 0
  const seconds = 'seconds' in duration ? toInteger(duration.seconds) : 0

  // Add years and months
  const date = toDate(dirtyDate)
  const dateWithMonths =
    months || years ? addMonths(date, months + years * 12) : date

  // Add weeks and days
  const dateWithDays =
    days || weeks ? addDays(dateWithMonths, days + weeks * 7) : dateWithMonths

  // Add days, hours, minutes and seconds
  const minutesToAdd = minutes + hours * 60
  const secondsToAdd = seconds + minutesToAdd * 60
  const msToAdd = secondsToAdd * 1000
  const finalDate = new Date(dateWithDays.getTime() + msToAdd)

  return finalDate
}
