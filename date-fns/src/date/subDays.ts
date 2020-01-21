import toInteger from "./_libs/toInteger";
import addDays from "./addDays";
import requiredArgs from "./_libs/requiredArgs";

export default function subDays(dirtyDate: Date | number, dirtyAmount: number) {
  requiredArgs(2, arguments)

  const amount = toInteger(dirtyAmount)
  return addDays(dirtyDate, -amount)
}
