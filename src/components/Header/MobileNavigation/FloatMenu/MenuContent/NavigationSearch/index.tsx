// Components
import QuickSearch from './QuickSearch'

// Hooks
import useNavigationSearch from './useNavigationSearch'

// Interfaces
import { NavigationSearchProps } from './interfaces'

export default function NavigationSearch({
  seekerTextLabel,
  searchPlaceholder,
  containerClassName
}: NavigationSearchProps) {
  const {
    register,
    results,
    handleBlur,
    showResults,
    hideResults,
    onClearSearch,
    isShowingResults,
    isShowingClearIcon,
    navigationSeekerRef
  } = useNavigationSearch()

  return (
    <QuickSearch
      results={results}
      onBlur={handleBlur}
      onFocus={showResults}
      textLabel={seekerTextLabel}
      customInput={register('search')}
      placeholder={searchPlaceholder}
      isShowingResults={isShowingResults}
      isShowingClearIcon={isShowingClearIcon}
      containerClassName={containerClassName}
      navigationSeekerRef={navigationSeekerRef}
      hideResults={hideResults}
      onClear={onClearSearch}
    />
  )
}
