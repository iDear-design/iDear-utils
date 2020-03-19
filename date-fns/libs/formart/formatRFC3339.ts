import toDate from "../toDate";
import isValid from "../is/isValid";
import addLeadingZeros from "../../utils/addLeadingZeros";
import toInteger from "../../utils/toInteger";

export default function formatRFC3339(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError(
      `1 arguments required, but only ${arguments.length} present`
    )
  }

  const originalDate = toDate(dirtyDate)

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value')
  }

  const options = dirtyOptions || {}
  const fractionDigits =
    options.fractionDigits == null ? 0 : toInteger(options.fractionDigits)

  // Test if fractionDigits is between 0 and 3 _and_ is not NaN
  if (!(fractionDigits >= 0 && fractionDigits <= 3)) {
    throw new RangeError('fractionDigits must be between 0 and 3 inclusively')
  }

  const day = addLeadingZeros(originalDate.getDate(), 2)
  const month = addLeadingZeros(originalDate.getMonth() + 1, 2)
  const year = originalDate.getFullYear()

  const hour = addLeadingZeros(originalDate.getHours(), 2)
  const minute = addLeadingZeros(originalDate.getMinutes(), 2)
  const second = addLeadingZeros(originalDate.getSeconds(), 2)

  let fractionalSecond = ''
  if (fractionDigits > 0) {
    const milliseconds = originalDate.getMilliseconds()
    const fractionalSeconds = Math.floor(
      milliseconds * Math.pow(10, fractionDigits - 3)
    )
    fractionalSecond = '.' + addLeadingZeros(fractionalSeconds, fractionDigits)
  }

  let offset = ''
  const tzOffset = originalDate.getTimezoneOffset()

  if (tzOffset !== 0) {
    const absoluteOffset = Math.abs(tzOffset)
    const hourOffset = addLeadingZeros(toInteger(absoluteOffset / 60), 2)
    const minuteOffset = addLeadingZeros(absoluteOffset % 60, 2)
    // If less than 0, the sign is +, because it is ahead of time.
    const sign = tzOffset < 0 ? '+' : '-'

    offset = `${sign}${hourOffset}:${minuteOffset}`
  } else {
    offset = 'Z'
  }

  return `${year}-${month}-${day}T${hour}:${minute}:${second}${fractionalSecond}${offset}`
}
