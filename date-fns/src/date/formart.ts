import isValid from "./isValid";
import defaultLocale from "./locale/en-US";
import subMilliseconds from "./subMilliseconds";
import toDate from "./toDate";
import formatters from "./_libs/format/formatters";
import longFormatters from "./_libs/format/longFormatters";
import getTimezoneOffsetInMilliseconds from "./_libs/getTimezoneOffsetInMilliseconds";
import {isProtectedDayOfYearToken, isProtectedWeekYearToken, throwProtectedError} from "./_libs/protectedTokens";
import toInteger from "./_libs/toInteger";
import requiredArgs from "./_libs/requiredArgs";

// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g

var escapedStringRegExp = /^'([^]*?)'?$/
var doubleQuoteRegExp = /''/g
var unescapedLatinCharacterRegExp = /[a-zA-Z]/

export default function format(dirtyDate, dirtyFormatStr, dirtyOptions): any {
  requiredArgs(2, arguments)

  var formatStr = String(dirtyFormatStr)
  var options = dirtyOptions || {}

  var locale = options.locale || defaultLocale

  var localeFirstWeekContainsDate =
    locale.options && locale.options.firstWeekContainsDate
  var defaultFirstWeekContainsDate =
    localeFirstWeekContainsDate == null
      ? 1
      : toInteger(localeFirstWeekContainsDate)
  var firstWeekContainsDate =
    options.firstWeekContainsDate == null
      ? defaultFirstWeekContainsDate
      : toInteger(options.firstWeekContainsDate)

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError(
      'firstWeekContainsDate must be between 1 and 7 inclusively'
    )
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn
  var defaultWeekStartsOn =
    localeWeekStartsOn == null ? 0 : toInteger(localeWeekStartsOn)
  var weekStartsOn =
    options.weekStartsOn == null
      ? defaultWeekStartsOn
      : toInteger(options.weekStartsOn)

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively')
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property')
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property')
  }

  var originalDate = toDate(dirtyDate)

  if (!isValid(originalDate)) {
    throw new RangeError('Invalid time value')
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate)
  var utcDate = subMilliseconds(originalDate, timezoneOffset)

  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  }

  var result = formatStr
    .match(longFormattingTokensRegExp)
    .map(function (substring) {
      var firstCharacter = substring[0]
      if (firstCharacter === 'p' || firstCharacter === 'P') {
        var longFormatter = longFormatters[firstCharacter]
        return longFormatter(substring, locale.formatLong)
        //return longFormatter(substring, locale.formatLong, formatterOptions)
      }
      return substring
    })
    .join('')
    .match(formattingTokensRegExp)
    .map(function (substring) {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return "'"
      }

      var firstCharacter = substring[0]
      if (firstCharacter === "'") {
        return cleanEscapedString(substring)
      }

      var formatter = formatters[firstCharacter]
      if (formatter) {
        if (
          !options.useAdditionalWeekYearTokens &&
          isProtectedWeekYearToken(substring)
        ) {
          throwProtectedError(substring, dirtyFormatStr, dirtyDate)
        }
        if (
          !options.useAdditionalDayOfYearTokens &&
          isProtectedDayOfYearToken(substring)
        ) {
          throwProtectedError(substring, dirtyFormatStr, dirtyDate)
        }
        return formatter(utcDate, substring, locale.localize, formatterOptions)
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' +
          firstCharacter +
          '`'
        )
      }

      return substring
    })
    .join('')

  return result
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'")
}
