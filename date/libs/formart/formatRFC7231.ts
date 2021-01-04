import toDate from "../toDate";
import isValid from "../is/isValid";
import addLeadingZeros from "../../utils/addLeadingZeros";

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

export default function formatRFC7231(dirtyDate) {
  if (arguments.length < 1) {
    throw new TypeError(
      `1 arguments required, but only ${arguments.length} present`
    )
  }

  const originalDate = toDate(dirtyDate)

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value')
  }

  const dayName = days[originalDate.getUTCDay()]
  const dayOfMonth = addLeadingZeros(originalDate.getUTCDate(), 2)
  const monthName = months[originalDate.getUTCMonth()]
  const year = originalDate.getUTCFullYear()

  const hour = addLeadingZeros(originalDate.getUTCHours(), 2)
  const minute = addLeadingZeros(originalDate.getUTCMinutes(), 2)
  const second = addLeadingZeros(originalDate.getUTCSeconds(), 2)

  // Result variables.
  return `${dayName}, ${dayOfMonth} ${monthName} ${year} ${hour}:${minute}:${second} GMT`
}
