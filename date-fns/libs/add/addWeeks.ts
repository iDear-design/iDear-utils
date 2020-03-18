import toInteger from "../../utils/toInteger";
import addDays from "./addDays";
import requiredArgs from "../../utils/requiredArgs";

export default function addWeeks(
  dirtyDate: Date | number,
  dirtyAmount: number
): Date {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  const days = amount * 7
  return addDays(dirtyDate, days)
}
