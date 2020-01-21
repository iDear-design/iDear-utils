import toDate from "./toDate";
import isValid from "./isValid";
import addLeadingZeros from "./_libs/addLeadingZeros";

export default function formatISO(dirtyDate, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError(
      `1 argument required, but only ${arguments.length} present`
    )
  }

  const originalDate = toDate(dirtyDate)

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value')
  }

  const options = dirtyOptions || {}
  const format = options.format == null ? 'extended' : String(options.format)
  const representation =
    options.representation == null ? 'complete' : String(options.representation)

  if (format !== 'extended' && format !== 'basic') {
    throw new RangeError("format must be 'extended' or 'basic'")
  }

  if (
    representation !== 'date' &&
    representation !== 'time' &&
    representation !== 'complete'
  ) {
    throw new RangeError("representation must be 'date', 'time', or 'complete'")
  }

  let result = ''
  let tzOffset = ''

  const dateDelimiter = format === 'extended' ? '-' : ''
  const timeDelimiter = format === 'extended' ? ':' : ''

  // Representation is either 'date' or 'complete'
  if (representation !== 'time') {
    const day = addLeadingZeros(originalDate.getDate(), 2)
    const month = addLeadingZeros(originalDate.getMonth() + 1, 2)
    const year = addLeadingZeros(originalDate.getFullYear(), 4)

    // yyyyMMdd or yyyy-MM-dd.
    result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`
  }

  // Representation is either 'time' or 'complete'
  if (representation !== 'date') {
    // Add the timezone.
    const offset = originalDate.getTimezoneOffset()

    if (offset !== 0) {
      const absoluteOffset = Math.abs(offset)
      const hourOffset = addLeadingZeros(Math.floor(absoluteOffset / 60), 2)
      const minuteOffset = addLeadingZeros(absoluteOffset % 60, 2)
      // If less than 0, the sign is +, because it is ahead of time.
      const sign = offset < 0 ? '+' : '-'

      tzOffset = `${sign}${hourOffset}:${minuteOffset}`
    } else {
      tzOffset = 'Z'
    }

    const hour = addLeadingZeros(originalDate.getHours(), 2)
    const minute = addLeadingZeros(originalDate.getMinutes(), 2)
    const second = addLeadingZeros(originalDate.getSeconds(), 2)

    // If there's also date, separate it with time with 'T'
    const separator = result === '' ? '' : 'T'

    // Creates a time string consisting of hour, minute, and second, separated by delimiters, if defined.
    const time = [hour, minute, second].join(timeDelimiter)

    // HHmmss or HH:mm:ss.
    result = `${result}${separator}${time}${tzOffset}`
  }

  return result
}
