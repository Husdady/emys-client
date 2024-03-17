// Hooks
import { useRef } from 'react'
import useCheckVerticalScrollbar from '@hooks/useCheckVerticalScrollbar'

// Interfaces
import useSearchOptions, {
  UseSearchOptionsParams
} from '@components/MultiSelect/hooks/useSearchOptions'

/**
 * Hook for implements the logic of the Options component
 * @param {UseSearchOptionsParams} params Receive props of the MultiSelect component
 */
export default function useOptions(params: UseSearchOptionsParams) {
  const searchData = useSearchOptions(params)
  const checkboxOptionsRef = useRef<HTMLUListElement | null>(null)
  const hasScrollbar = useCheckVerticalScrollbar({ elementRef: checkboxOptionsRef })

  return {
    ...searchData,
    hasScrollbar: hasScrollbar,
    checkboxOptionsRef: checkboxOptionsRef
  }
}
