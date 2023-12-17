// Hooks
import useAuth from '@hooks/useAuth'
import { useForm } from 'react-hook-form'
import { useRef, useMemo, useCallback } from 'react'

// Interfaces
import { SeekerFormState } from './interfaces'

// Utils
import { extractNavigation } from './utils'
import isEmptyString from '@utils/isEmptyString'

// Data
import navigation from '@assets/navigation'

export const DEFAULT_VALUES: SeekerFormState = {
  search: '',
  isShowingResults: false
}

/**
 * Hook that implements the Seeker functionality in the navigation
 */
export default function useNavigationSearch() {
  const { user } = useAuth()
  const navigationSeekerRef = useRef<HTMLDivElement | null>(null)

  const { watch, register, setValue } = useForm<SeekerFormState>({
    defaultValues: DEFAULT_VALUES
  })

  // Get navigation items
  const navigationItems = useMemo(() => extractNavigation(navigation), [user])

  // Check if needs to show clear icon
  const isShowingClearIcon = useMemo(() => !isEmptyString(watch('search')), [watch('search')])

  // Get results of the filtered navigation items
  const results = useMemo(() => {
    return navigationItems.filter(
      (navigationItem) =>
        navigationItem.hideInResults !== true &&
        navigationItem.title.toLowerCase().includes(watch('search').toLowerCase())
    )
  }, [user, watch('search'), watch('isShowingResults'), navigationItems])

  // watch('search').length > 0
  const isShowingResults = useMemo(() => {
    return watch('isShowingResults') && !isEmptyString(watch('search'))
  }, [watch('search'), watch('isShowingResults')])

  // Clear seeker value
  const onClearSearch = useCallback(() => {
    setValue('search', '', { shouldDirty: false })
  }, [])

  // Hide the current results
  const showResults = useCallback(() => {
    // Stop function if not exists a value in the navigation seeker
    if (watch('isShowingResults')) return // Check if its already showing
    setValue('isShowingResults', true) // Show results
  }, [watch('isShowingResults')])

  // Event 'blur' on InputText
  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement, Element>) => {
    // Validate navigation seeker ref
    if (navigationSeekerRef.current === null) return

    // Blur on navigation results
    const didClickResults = navigationSeekerRef.current.contains(e.relatedTarget)

    // Check if is target the close button modal
    const isCloseButtonModal = e.relatedTarget?.classList.contains('btn-cancel-modal')

    // Validate target
    if (!didClickResults && !isCloseButtonModal) {
      // hideResults()
    }
  }, [])

  // Hide the current results
  const hideResults = useCallback(() => {
    if (!watch('isShowingResults')) return // Check if its already hidden
    setValue('isShowingResults', false) // Hide results
  }, [watch('isShowingResults')])

  return {
    watch: watch,
    results: results,
    register: register,
    handleBlur: handleBlur,
    showResults: showResults,
    hideResults: hideResults,
    onClearSearch: onClearSearch,
    isShowingResults: isShowingResults,
    isShowingClearIcon: isShowingClearIcon,
    navigationSeekerRef: navigationSeekerRef
  }
}
