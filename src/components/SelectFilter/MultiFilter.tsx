// Librarys
import { Suspense } from 'react'

// Components
import Fallback from './Fallback'

// Interfaces
import { MultiSelectProps } from '@components/MultiSelect/interfaces'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Styles
import './styles.scss'

// Lazy Components
const MultiSelect = lazy(() => import('@components/MultiSelect'))

export default function MultiFilter({ containerClassName, ...props }: MultiSelectProps) {
  return (
    <Suspense fallback={<Fallback className={containerClassName} />}>
      <MultiSelect
        {...props}
        containerClassName={classnames(['multi-filter', containerClassName])}
      />
    </Suspense>
  )
}
