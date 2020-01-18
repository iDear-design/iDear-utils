import addLeadingZeros from "../addLeadingZeros";

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    var signedYear = date.getUTCFullYear()
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear
    return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length)
  },

  // Month
  M: function (date, token) {
    var month = date.getUTCMonth()
    return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2)
  },

  // Day of the month
  d: function (date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length)
  },

  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am'

    switch (token) {
      case 'a':
      case 'aa':
      case 'aaa':
        return dayPeriodEnumValue.toUpperCase()
      case 'aaaaa':
        return dayPeriodEnumValue[0]
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.'
    }
  },

  // Hour [1-12]
  h: function (date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length)
  },

  // Hour [0-23]
  H: function (date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length)
  },

  // Minute
  m: function (date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length)
  },

  // Second
  s: function (date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length)
  },

  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length
    var milliseconds = date.getUTCMilliseconds()
    var fractionalSeconds = Math.floor(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    )
    return addLeadingZeros(fractionalSeconds, token.length)
  }
}

export default formatters
