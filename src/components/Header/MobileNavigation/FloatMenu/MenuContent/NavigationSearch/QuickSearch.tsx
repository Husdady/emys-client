// Librarys
import dynamic from 'next/dynamic'

// Components
import MagnifyingGlass from '@assets/icons/magnifying-glass'
import FallbackItem from '@components/Fallback/FallbackItem'

// Interfaces
import { QuickSearchProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

// Dynamic Components
const Results = dynamic(() => import('./Results'))

const InputText = dynamic(() => import('@components/InputText'), {
  loading: () => <FallbackItem classLabel="hidden" />
})

export default function QuickSearch({
  results,
  onClear,
  hideResults,
  isShowingResults,
  isShowingClearIcon,
  containerClassName,
  navigationSeekerRef,
  placeholder = 'Búsqueda rápida',
  ...props
}: QuickSearchProps) {
  console.log({ results, isShowingResults })
  return (
    <>
      <InputText
        {...props}
        hidePlaceholderOnFocus
        onClear={onClear}
        placeholder={placeholder}
        isShowingClearIcon={isShowingClearIcon}
        icon={<MagnifyingGlass size="smaller" className="text-gray-400" />}
        containerClassName={classnames([containerClassName, 'fast-search w-full pt-3 pl-4 pr-3'])}
        className="text-[0.85rem] !bg-transparent dark:placeholder-gray-400"
        innerClassName="px-5 py-[0.78rem] bg-gray-100/30 shadow-sm !rounded-2xl border-gray-400/50"
      />

      {isShowingResults && (
        <Results
          data={results}
          hideResults={hideResults}
          navigationSeekerRef={navigationSeekerRef}
        />
      )}
    </>
  )
}
