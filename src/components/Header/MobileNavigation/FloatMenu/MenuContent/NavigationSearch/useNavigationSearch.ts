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
import navigation from '@data/navigation'

export interface Params {
  isShowingResults?: boolean
  hideResultsWhenSearchIsEmpty?: boolean
}

/**
 * Hook that implements the Seeker functionality in the navigation
 * @param {Params} params Receive a 'isShowingResults' and 'hideResultsWhenSearchIsEmpty'
 */
export default function useNavigationSearch({
  isShowingResults = false,
  hideResultsWhenSearchIsEmpty = true
}: Params = {}) {
  const { user } = useAuth()
  const navigationSeekerRef = useRef<HTMLDivElement | null>(null)

  const { watch, register, setValue } = useForm<SeekerFormState>({
    defaultValues: {
      search: '',
      isShowingResults: isShowingResults
    }
  })

  // Get navigation items
  const navigationItems = useMemo(() => extractNavigation(navigation), [user])

  // Check if needs to show clear icon
  const isShowingClearIcon = useMemo(() => !isEmptyString(watch('search')), [watch('search')])

  // // Check if is showing the results
  const isShowingResultsFlag = useMemo(() => {
    // Hide results when the search value is empty
    if (hideResultsWhenSearchIsEmpty) {
      return watch('isShowingResults') && !isEmptyString(watch('search'))
    }

    return watch('isShowingResults')
  }, [watch('search'), watch('isShowingResults'), hideResultsWhenSearchIsEmpty])

  // Get results of the filtered navigation items
  const results = useMemo(() => {
    return navigationItems.filter(
      (navigationItem) =>
        navigationItem.hideInResults !== true &&
        navigationItem.title?.toLowerCase().includes(watch('search')?.toLowerCase())
    )
  }, [user, watch('search'), watch('isShowingResults'), navigationItems])

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

  // Hide the current results
  const hideResults = useCallback(() => {
    if (!watch('isShowingResults')) return // Check if its already hidden
    setValue('isShowingResults', false) // Hide results
  }, [watch('isShowingResults')])

  return {
    watch: watch,
    results: results,
    register: register,
    showResults: showResults,
    hideResults: hideResults,
    onClearSearch: onClearSearch,
    isShowingResults: isShowingResultsFlag,
    isShowingClearIcon: isShowingClearIcon,
    navigationSeekerRef: navigationSeekerRef
  }
}
