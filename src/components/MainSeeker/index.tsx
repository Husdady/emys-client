// Librarys
import { Suspense } from 'react'

// Components
import Fallback from './Fallback'
import MagnifyingGlass from '@assets/icons/magnifying-glass'

// Interfaces
import { InputTextProps } from '@components/InputText/interfaces'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Lazy Components
const InputText = lazy(() => import('@components/InputText'))

export default function MainSeeker(props: Omit<InputTextProps, 'icon' | 'innerClassName'>) {
  return (
    <Suspense fallback={<Fallback />}>
      <InputText
        {...props}
        icon={<MagnifyingGlass size="xsm" className="text-gray-400" />}
        innerClassName="!rounded-full !px-7 !py-4 text-[0.95rem] !outline-transparent dark:!bg-gray-800"
        containerClassName={classnames([
          props.containerClassName,
          'main-seeker !border-none animate__animated animate__fadeIn min-h-[53px]'
        ])}
      />
    </Suspense>
  )
}
