// Hooks
import useMounted from '@hooks/useMounted'

// Utils
import changePreviewText from './utils/changePreviewText'

/**
 * Hook for implements the logic of the Images component
 */
export default function useImages() {
  useMounted(() => {
    changePreviewText()
  }, [])
}
