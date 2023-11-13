// Hooks
import useMounted from '@hooks/useMounted'

// Utils
import { addAdjustToModalFooter, removeAdjustToModalFooter } from '../utils'

export default function useAutoAdjustFooterButtons() {
  useMounted(() => {
    addAdjustToModalFooter()

    return () => {
      removeAdjustToModalFooter()
    }
  }, [])
}
