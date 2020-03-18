import toInteger from "../../utils/toInteger";
import addMilliseconds from "./addMilliseconds";
import requiredArgs from "../../utils/requiredArgs";

const MILLISECONDS_IN_HOUR = 3600000

export default function addHours(
  dirtyDate: Date | number,
  dirtyAmount: number
): Date {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR)
}
