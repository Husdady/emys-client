// Librarys
import { Suspense } from 'react'

// Components
import Fallback from './Fallback'
import Plus from '@components/Icons/Plus'

// Hooks
import useShowModalForAddMyTestimony from './useShowModalForAddTestimony'

// Interfaces
import { OnlyClassNameProp } from '@config/globalInterfaces'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Lazy Components
const Button = lazy(() => import('@components/Button'))

export default function AddMyTestimony({ className }: OnlyClassNameProp) {
  const { show, disabled } = useShowModalForAddMyTestimony()

  return (
    <Suspense fallback={<Fallback />}>
      <Button
        onClick={show}
        disabled={disabled}
        icon={<Plus size="md" />}
        title="Añadir mi testimonio"
        className={classnames([
          className,
          'gap-x-2.5 btn-add-my-testimony bg-white shadow-lg text-main-700 py-2.5 rounded-2xl enabled:hover:opacity-70 dark:text-rose-300 dark:bg-gray-800 font-semibold min-h-[46px] sm:min-h-[42px]'
        ])}
      />
    </Suspense>
  )
}
