import startOfWeek from "./startOfWeek";
import requiredArgs from "../../utils/requiredArgs";

export default function startOfISOWeek(dirtyDate: Date | number): Date {
  requiredArgs(1, arguments)

  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}
