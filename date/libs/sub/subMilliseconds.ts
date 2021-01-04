import toInteger from "../../utils/toInteger";
import requiredArgs from "../../utils/requiredArgs";
import addMilliseconds from "../add/addMilliseconds";

export default function subMilliseconds(dirtyDate: Date | number, dirtyAmount: number): Date {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return addMilliseconds(dirtyDate, -amount)
}
