import toInteger from "../../utils/toInteger";
import addMilliseconds from "./addMilliseconds";
import requiredArgs from "../../utils/requiredArgs";

export default function addSeconds(
  dirtyDate: Date | number,
  dirtyAmount: number
): Date {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * 1000)
}
