import requiredArgs from "../utils/requiredArgs";
import toInteger from "../utils/toInteger";
import addMinutes from "./add/addMinutes";

export default function subMinutes(dirtyDate: Date | number, dirtyAmount: number) {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return addMinutes(dirtyDate, -amount)
}
