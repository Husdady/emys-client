/**
 * Show mask on the application
 * @returns {void} Void
 */
export function showMask(): void {
  const globalMask = document.getElementById('global-mask') // Get global mask
  if (globalMask === null) return // Finish function if global mask not exists

  // Apply styles to global mask
  globalMask.style.top = '0'
  globalMask.style.left = '0'
  globalMask.style.right = '0'
  globalMask.style.bottom = '0'
  globalMask.style.zIndex = '99999'
  globalMask.style.width = '100%'
  globalMask.style.height = '100%'
  globalMask.style.display = 'block'
  globalMask.style.position = 'fixed'
  globalMask.style.cursor = 'not-allowed'

  // Check if the application is in Dark mode
  if (document.documentElement.classList.contains('dark')) {
    globalMask.style.backgroundColor = 'rgb(63 137 177 / 34%)'

    // Add 'zkl' class to html tag
    document.documentElement.classList.add('zkl')
  } else {
    globalMask.style.backgroundColor = 'rgb(99 175 182 / 23%)'
    document.documentElement.classList.remove('zkl') // Remove class
  }
}

/**
 * Hide mask from application
 * @returns {void} Void
 */
export function hideMask(): void {
  const globalMask = document.getElementById('global-mask') // Get global mask
  if (globalMask === null) return // Finish function if global mask not exists

  globalMask.removeAttribute('style') // Remove styles from global mask
  globalMask.style.display = 'none' // Hide global mask
}
