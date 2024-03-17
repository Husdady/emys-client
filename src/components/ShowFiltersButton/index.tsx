// Librarys
import { Suspense } from 'react'

// Components
import Fallback from './Fallback'
import Sliders from '@components/Icons/Sliders'

// Interfaces
import { ButtonProps } from '@components/Button/interfaces'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const Button = lazy(() => import('@components/Button'))

export default function ShowFiltersButton({ onClick }: Pick<ButtonProps, 'onClick'>) {
  return (
    <Suspense fallback={<Fallback />}>
      <Button
        onClick={onClick}
        title="Mostrar filtros"
        icon={<Sliders size="smx" />}
        className="btn-show-filters min-h-[42px] bg-white rounded-full hover:opacity-70 flex items-center justify-center !gap-x-2.5 font-semibold dark:bg-gray-800 dark:text-gray-300 xs:min-w-[174px] border border-gray-400/50 dark:border-gray-500 shadow-sm py-2.5"
      />
    </Suspense>
  )
}
