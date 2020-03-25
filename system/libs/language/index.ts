export default function getLanguage(): String {
  return ((navigator as any).browserLanguage || (navigator as any).language).toLowerCase()
}
