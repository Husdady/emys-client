// Librarys
import { Suspense } from 'react'

// Interfaces
import { BoxWrapTitleProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const Help = lazy(() => import('./Help'))

export default function BoxWrapTitle({ icon, value, popupTitle }: BoxWrapTitleProps) {
  return (
    <section className="box-title min-h-[46.79px] flex items-center justify-between rounded-md pl-4 overflow-hidden pr-2 py-[0.40rem] bg-white shadow-md gap-x-12 text-gray-700 dark:shadow-none dark:bg-gray-900 dark:text-gray-400">
      <div className="flex items-center gap-x-2 dark:text-pink-200">
        {icon}
        <h5 className="font-bold dark:font-semibold text-base font-poppins text-inherit leading-snug">{value}</h5>
      </div>

      <Suspense fallback={null}>
        <Help title={popupTitle} />
      </Suspense>
    </section>
  )
}
