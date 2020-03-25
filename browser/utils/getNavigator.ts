export function getUserAgent() {
  return (navigator as any).userAgent
}

export function getAppVersion() {
  return (navigator as any).appVersion
}

export function getLanguage() {
  return ((navigator as any).browserLanguage || (navigator as any).language).toLowerCase()
}
