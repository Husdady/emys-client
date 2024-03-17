// Librarys
import { Suspense } from 'react'

// Components
import Fallback from './Fallback'
import ArrowBackIcon from '@components/Icons/ArrowBack'

// Hooks
import useBackButton from './useBackButton'

// Interfaces
import { BackButtonProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Lazy Components
const Button = lazy(() => import('@components/Button'))

export default function BackButton({ path, ...props }: BackButtonProps) {
  const { goToPath } = useBackButton({ path: path })

  return (
    <Suspense fallback={<Fallback className={props.className} />}>
      <Button
        {...props}
        onClick={goToPath}
        icon={<ArrowBackIcon size="md" className="stroke-3" />}
        className={classnames([
          props.className,
          'gap-x-2.5 btn-back-button bg-white shadow-lg text-main-700 py-2.5 rounded-2xl hover:opacity-70 dark:text-rose-300 dark:bg-gray-800 font-semibold min-h-[46px] sm:min-h-[42px]'
        ])}
      />
    </Suspense>
  )
}
