import requiredArgs from "../utils/requiredArgs";
import toInteger from "../utils/toInteger";
import addSeconds from "./add/addSeconds";

export default function subSeconds(dirtyDate: Date | number, dirtyAmount: number): Date {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return addSeconds(dirtyDate, -amount)
}
