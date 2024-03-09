// Librarys
import { memo, Suspense } from 'react'

// Components
import MagnifyingGlass from '@components/Icons/MagnifyingGlass'

// Types
import { SearchOptionsProps } from './types'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const InputText = lazy(() => import('@components/InputText'))

function SearchOptions(props: SearchOptionsProps) {
  return (
    <Suspense fallback={null}>
      <InputText
        {...props}
        hidePlaceholderOnFocus
        containerClassName="w-full"
        className="placeholder-gray-500 dark:placeholder-gray-300/80"
        icon={<MagnifyingGlass size="xs" className="text-gray-400 dark:text-gray-300/80" />}
        innerClassName="search-options !min-h-[initial] py-[0.65rem] text-[0.8rem] dark:!bg-gray-900 dark:!border-gray-300/40 dark:outline-gray-300/40 !gap-x-2"
      />
    </Suspense>
  )
}

export default memo(SearchOptions)
