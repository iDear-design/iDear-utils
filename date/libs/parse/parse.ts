import defaultLocale from "../../locale/en-US"
import subMilliseconds from "../sub/subMilliseconds";
import toDate from "../toDate";
import assign from "@timi-uitls/data-type/utils/assign"
import longFormatters from "../../utils/format/longFormatters";
import getTimezoneOffsetInMilliseconds from "../../utils/getTimezoneOffsetInMilliseconds";
import {
  isProtectedDayOfYearToken,
  isProtectedWeekYearToken,
  throwProtectedError
} from "../../utils/protectedTokens";
import toInteger from "../../utils/toInteger";
import parsers from "../../utils/parsers"
import requiredArgs from "../../utils/requiredArgs";

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

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g

var escapedStringRegExp = /^'([^]*?)'?$/
var doubleQuoteRegExp = /''/g

var notWhitespaceRegExp = /\S/
var unescapedLatinCharacterRegExp = /[a-zA-Z]/

export default function parse(
  dirtyDateString,
  dirtyFormatString,
  dirtyReferenceDate,
  dirtyOptions
) {
  requiredArgs(3, arguments)

  var dateString = String(dirtyDateString)
  var formatString = String(dirtyFormatString)
  var options = dirtyOptions || {}

  var locale = options.locale || defaultLocale

  if (!locale.match) {
    throw new RangeError('locale must contain match property')
  }

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

  if (formatString === '') {
    if (dateString === '') {
      return toDate(dirtyReferenceDate)
    } else {
      return new Date(NaN)
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale
  }

  // If timezone isn't specified, it will be set to the obtain timezone
  var setters = [
    {
      priority: TIMEZONE_UNIT_PRIORITY,
      subPriority: -1,
      set: dateToSystemTimezone,
      index: 0
    }
  ]

  var i

  var tokens = formatString
    .match(longFormattingTokensRegExp)
    .map(function (substring) {
      var firstCharacter = substring[0]
      if (firstCharacter === 'p' || firstCharacter === 'P') {
        var longFormatter = longFormatters[firstCharacter]
        return longFormatter(substring, locale.formatLong, subFnOptions)
      }
      return substring
    })
    .join('')
    .match(formattingTokensRegExp)

  const usedTokens = []

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (
      !options.useAdditionalWeekYearTokens &&
      isProtectedWeekYearToken(token)
    ) {
      throwProtectedError(token, formatString, dirtyDateString)
    }
    if (
      !options.useAdditionalDayOfYearTokens &&
      isProtectedDayOfYearToken(token)
    ) {
      throwProtectedError(token, formatString, dirtyDateString)
    }

    var firstCharacter = token[0]
    var parser = parsers[firstCharacter]
    if (parser) {
      const {incompatibleTokens} = parser
      if (Array.isArray(incompatibleTokens)) {
        let incompatibleToken
        for (let i = 0; i < usedTokens.length; i++) {
          const usedToken = usedTokens[i].token
          if (
            incompatibleTokens.indexOf(usedToken) !== -1 ||
            usedToken === firstCharacter
          ) {
            incompatibleToken = usedTokens[i]
            break
          }
        }
        if (incompatibleToken) {
          throw new RangeError(
            `The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`
          )
        }
      } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
        throw new RangeError(
          `The format string mustn't contain \`${token}\` and any other token at the same time`
        )
      }

      usedTokens.push({token: firstCharacter, fullToken: token})

      var parseResult = parser.parse(
        dateString,
        token,
        locale.match,
        subFnOptions
      )

      if (!parseResult) {
        return new Date(NaN)
      }

      setters.push({
        priority: parser.priority,
        subPriority: parser.subPriority || 0,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      })

      dateString = parseResult.rest
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          'Format string contains an unescaped latin alphabet character `' +
          firstCharacter +
          '`'
        )
      }

      // Replace two single quote characters with one single quote character
      if (token === "''") {
        token = "'"
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token)
      }

      // Cut token from string, or, if string doesn't match the token, return Invalid Date
      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length)
      } else {
        return new Date(NaN)
      }
    }
  }

  // Check if the remaining input contains something other than whitespace
  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN)
  }

  var uniquePrioritySetters = setters
    .map(function (setter) {
      return setter.priority
    })
    .sort(function (a, b) {
      return b - a
    })
    .filter(function (priority, index, array) {
      return array.indexOf(priority) === index
    })
    .map(function (priority) {
      return setters
        .filter(function (setter) {
          return setter.priority === priority
        })
        .sort(function (a, b) {
          return b.subPriority - a.subPriority
        })
    })
    .map(function (setterArray) {
      return setterArray[0]
    })

  var date = toDate(dirtyReferenceDate)

  if (isNaN(date)) {
    return new Date(NaN)
  }

  // Convert the date in obtain timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37
  var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date))

  var flags = {}
  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i]

    if (
      setter.validate &&
      !setter.validate(utcDate, setter.value, subFnOptions)
    ) {
      return new Date(NaN)
    }

    var result = setter.set(utcDate, flags, setter.value, subFnOptions)
    // Result is tuple (date, flags)
    if (result[0]) {
      utcDate = result[0]
      assign(flags, result[1])
      // Result is date
    } else {
      utcDate = result
    }
  }

  return utcDate
}

function dateToSystemTimezone(date, flags) {
  if (flags.timestampIsSet) {
    return date
  }

  var convertedDate = new Date(0)
  convertedDate.setFullYear(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate()
  )
  convertedDate.setHours(
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  )
  return convertedDate
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'")
}
