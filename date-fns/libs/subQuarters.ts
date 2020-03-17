import requiredArgs from "../utils/requiredArgs";
import toInteger from "../utils/toInteger";
import addQuarters from "./addQuarters";

export default function subQuarters(dirtyDate: Date | number, dirtyAmount: number): Date {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return addQuarters(dirtyDate, -amount)
}
