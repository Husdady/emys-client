// Librarys
import dynamic from 'next/dynamic'

// Components
import Results from './Results'
import MagnifyingGlass from '@assets/icons/magnifying-glass'

// Interfaces
import { QuickSearchProps } from './interfaces'

// Dynamic Components
const InputText = dynamic(() => import('@components/InputText'))

export default function QuickSearch({
  results,
  onClear,
  isShowingResults,
  isShowingClearIcon,
  hideResults,
  ...props
}: QuickSearchProps) {
  return (
    <>
      <InputText
        {...props}
        hidePlaceholderOnFocus
        onClear={onClear}
        isShowingClearIcon={isShowingClearIcon}
        icon={<MagnifyingGlass size="smaller" className="text-gray-400" />}
        placeholder="Búsqueda rádipa..."
        containerClassName="fast-search w-full pt-3 pl-4 pr-3"
        className="text-[0.85rem] !bg-transparent dark:placeholder-gray-400"
        innerClassName="px-5 py-[0.78rem] bg-gray-100/30 shadow-sm !rounded-2xl border-gray-400/50"
      />

      {isShowingResults && <Results data={results} hideResults={hideResults} />}
    </>
  )
}