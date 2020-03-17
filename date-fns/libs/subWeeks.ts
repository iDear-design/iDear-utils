import requiredArgs from "../utils/requiredArgs";
import toInteger from "../utils/toInteger";
import addWeeks from "./addWeeks";

export default function subWeeks(dirtyDate: Date | number, dirtyAmount: number): Date {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return addWeeks(dirtyDate, -amount)
}
