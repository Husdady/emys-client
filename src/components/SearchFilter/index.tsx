// Librarys
import { Suspense } from 'react'

// Components
import Fallback from './Fallback'
import MagnifyingGlass from '@components/Icons/MagnifyingGlass'

// Interfaces
import { SearchFilterProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const InputText = lazy(() => import('@components/InputText'))

export default function SearchFilter({
  placeholder,
  containerClassName,
  textLabelClassName,
  ...props
}: SearchFilterProps) {
  return (
    <Suspense
      fallback={<Fallback className={containerClassName} textLabelClassName={textLabelClassName} />}
    >
      <InputText
        {...props}
        hidePlaceholderOnFocus
        placeholder={placeholder}
        containerClassName={containerClassName}
        className="placeholder-gray-500 dark:placeholder-gray-300/80"
        icon={<MagnifyingGlass size="smaller" className="text-gray-400 dark:text-gray-300/80" />}
        innerClassName="search-filter py-[0.73rem] !rounded-lg text-[0.87rem] dark:!bg-gray-900 dark:!border-gray-300/40 dark:outline-gray-300/40"
      />
    </Suspense>
  )
}
