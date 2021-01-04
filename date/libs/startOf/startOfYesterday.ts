export default function startOfYesterday() {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const day = now.getDate()

  const date = new Date(0)
  date.setFullYear(year, month, day - 1)
  date.setHours(0, 0, 0, 0)
  return date
}
