// Components
import QuickSearch from './QuickSearch'

// Hooks
import useNavigationSearch from './useNavigationSearch'

// Styles
import './styles.scss'

export default function NavigationSearch() {
  const {
    register,
    results,
    handleBlur,
    onClearSearch,
    showResults,
    hideResults,
    isShowingClearIcon,
    isShowingResults
  } = useNavigationSearch()

  return (
    <QuickSearch
      results={results}
      onBlur={handleBlur}
      onFocus={showResults}
      customInput={register('search')}
      isShowingResults={isShowingResults}
      isShowingClearIcon={isShowingClearIcon}
      hideResults={hideResults}
      onClear={onClearSearch}
    />
  )
}
