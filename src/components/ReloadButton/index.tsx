// Librarys
import { Suspense } from 'react'

// Components
import Fallback from './Fallback'
import Reload from '@components/Icons/Reload'

// Interfaces
import { ButtonProps } from '@components/Button/interfaces'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const Button = lazy(() => import('@components/Button'))

export default function ReloadButton(
  props: Omit<ButtonProps, 'icon' | 'title' | 'className' | 'loadingTitle'>
) {
  return (
    <Suspense fallback={<Fallback />}>
      <Button
        {...props}
        title="Volver a cargar"
        loadingTitle="Cargando . . ."
        icon={<Reload size="smd" className="rotate-180 stroke-3" />}
        className="gap-x-2.5 btn-reload bg-white shadow-lg text-main-700 py-2.5 rounded-2xl hover:opacity-70 dark:text-rose-300 dark:bg-gray-800 font-semibold min-w-[179px] min-h-[46px] sm:min-h-[42px]"
      />
    </Suspense>
  )
}
