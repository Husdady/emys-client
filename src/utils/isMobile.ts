// Constants
export const MIN_WIDTH_MOBILE_DEVICES = 768

/**
 * Check if the current device is Mobile
 * @returns {boolean} Boolean
 */
export default function isMobile(): boolean {
  return window.innerWidth > MIN_WIDTH_MOBILE_DEVICES
}
