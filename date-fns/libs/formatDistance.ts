import {cloneObject} from "@timi-utils/data-type";
import toDate from "./toDate";
import differenceInMonths from "./differenceInMonths";
import differenceInSeconds from "./differenceInSeconds";
import defaultLocale from "./locale/en-US"
import compareAsc from "./compareAsc";
import getTimezoneOffsetInMilliseconds from "./_libs/getTimezoneOffsetInMilliseconds";
import requiredArgs from "./_libs/requiredArgs";

var MINUTES_IN_DAY = 1440
var MINUTES_IN_ALMOST_TWO_DAYS = 2520
var MINUTES_IN_MONTH = 43200
var MINUTES_IN_TWO_MONTHS = 86400

export default function formatDistance(dirtyDate, dirtyBaseDate, dirtyOptions) {
  requiredArgs(2, arguments)

  var options = dirtyOptions || {}
  var locale = options.locale || defaultLocale

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property')
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

  var seconds = differenceInSeconds(dateRight, dateLeft)
  var offsetInSeconds =
    (getTimezoneOffsetInMilliseconds(dateRight) -
      getTimezoneOffsetInMilliseconds(dateLeft)) /
    1000
  var minutes = Math.round((seconds - offsetInSeconds) / 60)
  var months

  // 0 up to 2 mins
  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions)
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions)
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions)
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions)
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions)
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions)
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions)
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions)
      }
    }

    // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions)

    // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions)

    // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60)
    return locale.formatDistance('aboutXHours', hours, localizeOptions)

    // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions)

    // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY)
    return locale.formatDistance('xDays', days, localizeOptions)

    // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH)
    return locale.formatDistance('aboutXMonths', months, localizeOptions)
  }

  months = differenceInMonths(dateRight, dateLeft)

  // 2 months up to 12 months
  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH)
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions)

    // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12
    var years = Math.floor(months / 12)

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions)

      // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions)

      // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions)
    }
  }
}

