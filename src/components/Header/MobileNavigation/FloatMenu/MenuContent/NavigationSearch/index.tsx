// Components
import QuickSearch from './QuickSearch'

// Hooks
import useNavigationSearch from './useNavigationSearch'

// Interfaces
import { NavigationSearchProps } from './interfaces'

export default function NavigationSearch({
  seekerTextLabel,
  searchPlaceholder,
  containerClassName,
  ...props
}: NavigationSearchProps) {
  const {
    results,
    register,
    showResults,
    hideResults,
    onClearSearch,
    isShowingResults,
    isShowingClearIcon,
    navigationSeekerRef
  } = useNavigationSearch(props)

  return (
    <QuickSearch
      results={results}
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
