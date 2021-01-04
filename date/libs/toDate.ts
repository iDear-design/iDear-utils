import requiredArgs from '../utils/requiredArgs'

export default function toDate(argument: Date | number): Date {
  requiredArgs(1, arguments)

  const argStr = Object.prototype.toString.call(argument)

  // Clone the date
  if (argument instanceof Date || (typeof argument === 'object' && argStr === '[object Date]')) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument)
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule")
      // eslint-disable-next-line no-console
      console.warn(new Error().stack)
    }
    return new Date(NaN)
  }
}
