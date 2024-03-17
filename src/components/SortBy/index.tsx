// Components
import Fallback from '@components/Fallback'

// Types
import type { SortByProps } from './types'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Lazy Components
const Select = lazy(() => import('@components/Select'))

export default function SortBy(props: SortByProps) {
  return (
    <Fallback classLabel="w-20" classContainer={classnames(['w-full', props.containerClassName])}>
      <Select {...props} mode="sort" textLabel="Ordenar por" />
    </Fallback>
  )
}
