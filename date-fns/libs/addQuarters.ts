import toInteger from "../utils/toInteger";
import addMonths from "./addMonths";
import requiredArgs from "../utils/requiredArgs";

export default function addQuarters(
  dirtyDate: Date | number,
  dirtyAmount: number
): Date {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  const months = amount * 3
  return addMonths(dirtyDate, months)
}
