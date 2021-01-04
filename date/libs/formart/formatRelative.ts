import requiredArgs from "../../utils/requiredArgs";
import toDate from "../toDate";
import defaultLocale from "../../locale/en-US"
import differenceInCalendarDays from "../differenceIn/differenceInCalendarDays";
import subMilliseconds from "../sub/subMilliseconds";
import format from "./formart";
import getTimezoneOffsetInMilliseconds from "../../utils/getTimezoneOffsetInMilliseconds";


export default function formatRelative(dirtyDate, dirtyBaseDate, dirtyOptions) {
  requiredArgs(2, arguments)

  var date = toDate(dirtyDate)
  var baseDate = toDate(dirtyBaseDate)

  var options = dirtyOptions || {}
  var locale = options.locale || defaultLocale

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property')
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property')
  }

  if (!locale.formatRelative) {
    throw new RangeError('locale must contain formatRelative property')
  }

  var diff = differenceInCalendarDays(date, baseDate)

  if (isNaN(diff)) {
    throw new RangeError('Invalid time value')
  }

  var token
  if (diff < -6) {
    token = 'other'
  } else if (diff < -1) {
    token = 'lastWeek'
  } else if (diff < 0) {
    token = 'yesterday'
  } else if (diff < 1) {
    token = 'today'
  } else if (diff < 2) {
    token = 'tomorrow'
  } else if (diff < 7) {
    token = 'nextWeek'
  } else {
    token = 'other'
  }

  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date))
  var utcBaseDate = subMilliseconds(
    baseDate,
    getTimezoneOffsetInMilliseconds(baseDate)
  )
  var formatStr = locale.formatRelative(token, utcDate, utcBaseDate, options)
  return format(date, formatStr, options)
}
