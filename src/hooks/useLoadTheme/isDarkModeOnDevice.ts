/**
 * Check if the device is in 'DARK' mode
 * @returns {boolean} Boolean
 */
export default function isDarkModeOnDevice(): boolean {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}
