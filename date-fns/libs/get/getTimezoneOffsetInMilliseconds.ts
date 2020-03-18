var MILLISECONDS_IN_MINUTE = 60000

function getDateMillisecondsPart(date) {
  return date.getTime() % MILLISECONDS_IN_MINUTE
}

export default function getTimezoneOffsetInMilliseconds(dirtyDate) {
  var date = new Date(dirtyDate.getTime())
  var baseTimezoneOffset = Math.ceil(date.getTimezoneOffset())
  date.setSeconds(0, 0)
  var hasNegativeUTCOffset = baseTimezoneOffset > 0
  var millisecondsPartOfTimezoneOffset = hasNegativeUTCOffset
    ? (MILLISECONDS_IN_MINUTE + getDateMillisecondsPart(date)) %
    MILLISECONDS_IN_MINUTE
    : getDateMillisecondsPart(date)

  return (
    baseTimezoneOffset * MILLISECONDS_IN_MINUTE +
    millisecondsPartOfTimezoneOffset
  )
}
