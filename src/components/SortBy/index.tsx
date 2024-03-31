// Components
import Fallback from '@components/Fallback'

// Interfaces
import { SortByProps } from './interfaces'

// Utils
import lazy from '@utils/lazy'
import classnames from '@utils/classnames'

// Lazy Components
const Select = lazy(() => import('@components/Select'))

export default function SortBy(props: SortByProps) {
  return (
    <Fallback
      classLabel={props.classLabel ?? 'w-20'}
      classContainer={classnames(['w-full', props.containerClassName])}
    >
      <Select {...props} mode="sort" textLabel={props.textLabel ?? 'Ordenar por'} />
    </Fallback>
  )
}
