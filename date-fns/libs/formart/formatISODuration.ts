import requiredArgs from "../../utils/requiredArgs";

export default function formatISODuration(duration) {
  requiredArgs(1, arguments)

  if (typeof duration !== 'object')
    throw new Error('Duration must be an object')

  const {
    years = 0,
    months = 0,
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0
  } = duration

  return `P${years}Y${months}M${days}DT${hours}H${minutes}M${seconds}S`
}
