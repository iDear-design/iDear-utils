export function getUserAgent() {
  return (navigator as any).userAgent
}

export function getAppVersion() {
  return (navigator as any).appVersion
}
