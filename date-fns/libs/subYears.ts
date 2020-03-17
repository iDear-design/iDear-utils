import requiredArgs from "../utils/requiredArgs";
import toInteger from "../utils/toInteger";
import addYears from "./addYears";

export default function subYears(dirtyDate: Date | number, dirtyAmount: number): Date {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return addYears(dirtyDate, -amount)
}
