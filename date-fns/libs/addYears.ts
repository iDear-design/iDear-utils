import toInteger from "../utils/toInteger";
import addMonths from "./addMonths";
import requiredArgs from "../utils/requiredArgs";

export default function addYears(
  dirtyDate: Date | number,
  dirtyAmount: number
): Date {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return addMonths(dirtyDate, amount * 12)
}
