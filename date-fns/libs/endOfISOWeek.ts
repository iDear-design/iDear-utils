import endOfWeek from "./endOfWeek";
import requiredArgs from "../utils/requiredArgs";

export default function endOfISOWeek(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  return endOfWeek(dirtyDate, {weekStartsOn: 1})
}
