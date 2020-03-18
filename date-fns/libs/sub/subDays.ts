import toInteger from "../utils/toInteger";
import addDays from "./add/addDays";
import requiredArgs from "../utils/requiredArgs";

export default function subDays(dirtyDate: Date | number, dirtyAmount: number) {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return addDays(dirtyDate, -amount)
}
