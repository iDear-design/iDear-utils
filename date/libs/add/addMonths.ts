import toInteger from "../../utils/toInteger";
import toDate from "../toDate";
import requiredArgs from "../../utils/requiredArgs";

export default function addMonths(
  dirtyDate: Date | number,
  dirtyAmount: number
): Date {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const amount = toInteger(dirtyAmount)
  if (isNaN(amount)) {
    return new Date(NaN)
  }
  if (!amount) {
    return date
  }
  const dayOfMonth = date.getDate()
  const endOfDesiredMonth = new Date(date.getTime())
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0)
  const daysInMonth = endOfDesiredMonth.getDate()
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth
  } else {
    date.setFullYear(
      endOfDesiredMonth.getFullYear(),
      endOfDesiredMonth.getMonth(),
      dayOfMonth
    )
    return date
  }
}
