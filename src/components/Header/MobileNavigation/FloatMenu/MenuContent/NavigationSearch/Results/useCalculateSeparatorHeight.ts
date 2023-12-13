// Hooks
import useMounted from '@hooks/useMounted'

// Utils
import { updateSeparatorHeight } from './utils'

/**
 * Hook that calculate the height of the Results separator
 */
export default function useCalculateSeparatorHeight() {
  useMounted(() => {
    const separator = document.getElementById('navigation-results-separator')
    if (separator === null) return

    updateSeparatorHeight() // Execute callback
    window.addEventListener('resize', updateSeparatorHeight) // Create resize event

    return () => {
      // Remove resize event
      window.removeEventListener('resize', updateSeparatorHeight)
    }
  }, [])
}
