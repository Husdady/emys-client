// Hooks
import useAuth from '@hooks/useAuth'
import { useForm } from 'react-hook-form'
import { useMemo, useCallback } from 'react'

// Interfaces
import { SeekerFormState } from './interfaces'

// Utils
import { extractNavigation } from './utils'

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

  const { watch, register, setValue } = useForm<SeekerFormState>({
    defaultValues: DEFAULT_VALUES
  })

  // Get navigation items
  const navigationItems = useMemo(() => {
    return extractNavigation(navigation)
  }, [user])

  // Clear seeker value
  const onClearSearch = useCallback(() => {
    setValue('search', '', { shouldDirty: false })
  }, [])

  // Check if needs to show clear icon
  const isShowingClearIcon = useMemo(() => watch('search').length > 0, [watch('search')])

  // watch('search').length > 0
  const isShowingResults = useMemo(() => {
    return watch('isShowingResults') && watch('search').length > 0
  }, [watch('search'), watch('isShowingResults')])

  // Hide the current results
  const showResults = useCallback(() => {
    // Stop function if not exists a value in the navigation seeker
    if (watch('isShowingResults')) return // Check if its already showing
    setValue('isShowingResults', true) // Show results
  }, [watch('isShowingResults')])

  // Event 'blur' on InputText
  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement, Element>) => {
    // Get navigation results
    const navigationResults = document.querySelector('.navigation-seeker')
    if (navigationResults === null) return // Navigation results dont exits in the DOM

    // Blur on navigation results
    const didClickResults = navigationResults.contains(e.relatedTarget)
    if (!didClickResults) hideResults()
  }, [])

  // Hide the current results
  const hideResults = useCallback(() => {
    if (!watch('isShowingResults')) return // Check if its already hidden
    setValue('isShowingResults', false) // Hide results
  }, [watch('isShowingResults')])

  // Get results of the filtered navigation items
  const results = useMemo(() => {
    return navigationItems.filter(
      (navigationItem) =>
        navigationItem.hideInResults !== true &&
        navigationItem.title.toLowerCase().includes(watch('search').toLowerCase())
    )
  }, [user, watch('search'), watch('isShowingResults'), navigationItems])

  return {
    watch: watch,
    results: results,
    register: register,
    handleBlur: handleBlur,
    showResults: showResults,
    hideResults: hideResults,
    onClearSearch: onClearSearch,
    isShowingClearIcon: isShowingClearIcon,
    isShowingResults: isShowingResults
  }
}
