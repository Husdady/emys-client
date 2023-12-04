// Librarys
import { Suspense } from 'react'

// Components
import Fallback from './Fallback'

// Interfaces
import { SelectProps } from '@components/Select/interfaces'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Styles
import './styles.scss'

// Lazy Components
const Select = lazy(() => import('@components/Select'))

export default function SelectFilters({ containerClassName, ...props }: SelectProps) {
  return (
    <Suspense fallback={<Fallback className={containerClassName} />}>
      <Select {...props} containerClassName={classnames(['select-filter', containerClassName])} />
    </Suspense>
  )
}
