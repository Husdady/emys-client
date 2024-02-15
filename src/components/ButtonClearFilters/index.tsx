// Librarys
import { Suspense } from 'react'

// Components
import Fallback from './Fallback'
import HandSparkles from '@assets/icons/hand-sparkles'

// Hooks
import useButtonClearFilter from './useButtonClearFilters'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const Button = lazy(() => import('@components/Button'))

export default function ButtonClearFilters() {
  const { clear, disabled } = useButtonClearFilter()

  return (
    <Suspense fallback={<Fallback />}>
      <Button
        onClick={clear}
        disabled={disabled}
        title="Limpiar filtros"
        icon={<HandSparkles size="smx" />}
        className="btn-clear-filters min-h-[42px] bg-white rounded-full enabled:hover:opacity-70 flex items-center justify-center !gap-x-2.5 font-semibold dark:bg-gray-800 dark:text-gray-300 min-w-[165px] !px-2 border border-gray-400/50 dark:border-gray-500 shadow-sm"
      />
    </Suspense>
  )
}
