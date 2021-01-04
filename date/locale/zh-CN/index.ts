import formatDistance from './_lib/formatDistance'
import formatLong from './_lib/formatLong'
import formatRelative from './_lib/formatRelative'
import localize from './_lib/localize'
import match from './_lib/match'

var locale = {
  code: 'zh-CN',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1,/* Monday */
    firstWeekContainsDate: 4
  }
}

export default locale
