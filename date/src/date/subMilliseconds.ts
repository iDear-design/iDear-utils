import toInteger from "./_libs/toInteger";
import requiredArgs from "./_libs/requiredArgs";
import addMilliseconds from "./addMilliseconds";

export default function subMilliseconds(dirtyDate: Date | number, dirtyAmount: number): Date {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return addMilliseconds(dirtyDate, -amount)
}
