/**
 * Update the height of the Results separator
 */
export function updateSeparatorHeight() {
  // Stop function if width of the window screen is less than or equal to '1080' px
  if (window.innerWidth <= 1080) return

  // Get menu header
  const menuHeader = document.querySelector('.menu-header') as HTMLElement
  if (menuHeader === null) return // Check if exists in the DOM

  // Get navigation separator
  const separator = document.getElementById('navigation-results-separator')
  if (separator === null) return // Check if exists in the DOM

  const headerHeight = menuHeader.offsetHeight // Get height of the Menu Header
  const separatorHeight = separator.offsetHeight // Get height of the separator

  // Its the same heights
  if (headerHeight === separatorHeight) return
  separator.style.height = `${headerHeight}px` // Add height to separator
}
