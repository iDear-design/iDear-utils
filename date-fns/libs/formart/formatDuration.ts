import defaultLocale from "../locale/en-US"

const defaultFormat = [
  'years',
  'months',
  'weeks',
  'days',
  'hours',
  'minutes',
  'seconds'
]

export default function formatDuration(duration, options: any = {}) {
  if (arguments.length < 1) {
    throw new TypeError(
      `1 argument required, but only ${arguments.length} present`
    )
  }

  const format = options.format || defaultFormat
  const locale = options.locale || defaultLocale
  const zero = options.zero || false
  const delimiter = options.delimiter || ' '

  const result = format
    .reduce((acc, unit) => {
      const token = `x${unit.replace(/(^.)/, m => m.toUpperCase())}`
      const addChunk =
        typeof duration[unit] === 'number' && (zero || duration[unit])
      return addChunk
        ? acc.concat(locale.formatDistance(token, duration[unit]))
        : acc
    }, [])
    .join(delimiter)

  return result
}
