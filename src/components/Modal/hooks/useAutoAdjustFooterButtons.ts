// Hooks
import useMounted from '@hooks/useMounted'

// Utils
import addAdjustToModalFooter from '@components/Modal/utils/addAdjustToModalFooter'
import removeAdjustToModalFooter from '@components/Modal/utils/removeAdjustToModalFooter'

/**
 * Hook for auto adjust the footer of the Modal
 */
export default function useAutoAdjustFooterButtons() {
  useMounted(() => {
    addAdjustToModalFooter()

    return () => {
      removeAdjustToModalFooter()
    }
  }, [])
}
