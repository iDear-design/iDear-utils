import toDate from "./toDate";
import toInteger from "./_libs/toInteger";
import requiredArgs from "./_libs/requiredArgs";

export default function addDays(dirtyDate: Date | number, dirtyAmount: number): Date {
  requiredArgs(2, arguments)

  const date = toDate(dirtyDate)
  const amount = toInteger(dirtyAmount)
  if (isNaN(amount)) {
    return new Date(NaN)
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date
  }
  date.setDate(date.getDate() + amount)
  return date
}
