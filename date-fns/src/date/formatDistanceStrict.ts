import toDate from "./toDate";
import compareAsc from "./compareAsc";
import getTimezoneOffsetInMilliseconds from "./_libs/getTimezoneOffsetInMilliseconds";
import differenceInSeconds from "./differenceInSeconds";
import cloneObject from "../data/cloneObject";
import defaultLocale from "./locale/en-US"
import requiredArgs from "./_libs/requiredArgs";

var MINUTES_IN_DAY = 1440
var MINUTES_IN_MONTH = 43200
var MINUTES_IN_YEAR = 525600

export default function formatDistanceStrict(
  dirtyDate,
  dirtyBaseDate,
  dirtyOptions
) {
  requiredArgs(2, arguments)

  var options = dirtyOptions || {}
  var locale = options.locale || defaultLocale

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain localize.formatDistance property')
  }

  var comparison = compareAsc(dirtyDate, dirtyBaseDate)

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value')
  }

  var localizeOptions = cloneObject(options)
  localizeOptions.addSuffix = Boolean(options.addSuffix)
  localizeOptions.comparison = comparison

  var dateLeft
  var dateRight
  if (comparison > 0) {
    dateLeft = toDate(dirtyBaseDate)
    dateRight = toDate(dirtyDate)
  } else {
    dateLeft = toDate(dirtyDate)
    dateRight = toDate(dirtyBaseDate)
  }

  var roundingMethod =
    options.roundingMethod == null ? 'round' : String(options.roundingMethod)
  var roundingMethodFn

  if (roundingMethod === 'floor') {
    roundingMethodFn = Math.floor
  } else if (roundingMethod === 'ceil') {
    roundingMethodFn = Math.ceil
  } else if (roundingMethod === 'round') {
    roundingMethodFn = Math.round
  } else {
    throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'")
  }

  var seconds = differenceInSeconds(dateRight, dateLeft)
  var offsetInSeconds =
    (getTimezoneOffsetInMilliseconds(dateRight) -
      getTimezoneOffsetInMilliseconds(dateLeft)) /
    1000
  var minutes = roundingMethodFn((seconds - offsetInSeconds) / 60)

  var unit
  if (options.unit == null) {
    if (minutes < 1) {
      unit = 'second'
    } else if (minutes < 60) {
      unit = 'minute'
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'hour'
    } else if (minutes < MINUTES_IN_MONTH) {
      unit = 'day'
    } else if (minutes < MINUTES_IN_YEAR) {
      unit = 'month'
    } else {
      unit = 'year'
    }
  } else {
    unit = String(options.unit)
  }

  // 0 up to 60 seconds
  if (unit === 'second') {
    return locale.formatDistance('xSeconds', seconds, localizeOptions)

    // 1 up to 60 mins
  } else if (unit === 'minute') {
    return locale.formatDistance('xMinutes', minutes, localizeOptions)

    // 1 up to 24 hours
  } else if (unit === 'hour') {
    var hours = roundingMethodFn(minutes / 60)
    return locale.formatDistance('xHours', hours, localizeOptions)

    // 1 up to 30 days
  } else if (unit === 'day') {
    var days = roundingMethodFn(minutes / MINUTES_IN_DAY)
    return locale.formatDistance('xDays', days, localizeOptions)

    // 1 up to 12 months
  } else if (unit === 'month') {
    var months = roundingMethodFn(minutes / MINUTES_IN_MONTH)
    return locale.formatDistance('xMonths', months, localizeOptions)

    // 1 year up to max Date
  } else if (unit === 'year') {
    var years = roundingMethodFn(minutes / MINUTES_IN_YEAR)
    return locale.formatDistance('xYears', years, localizeOptions)
  }

  throw new RangeError(
    "unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'"
  )
}
