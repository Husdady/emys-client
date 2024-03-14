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

export default function SearchOptions(props: SearchOptionsProps) {
  return (
    <Suspense fallback={null}>
      <InputText
        {...props}
        hidePlaceholderOnFocus
        containerClassName="w-full"
        className="placeholder-gray-500 dark:placeholder-gray-300/80"
        icon={<MagnifyingGlass size="xsx" className="text-gray-400 dark:text-gray-300/80" />}
        innerClassName="search-options dark:!bg-gray-900 dark:!border-gray-300/40 dark:outline-gray-300/40 !gap-x-2 !rounded-xl"
      />
    </Suspense>
  )
}
