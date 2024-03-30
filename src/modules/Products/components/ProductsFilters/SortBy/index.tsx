// Components
import SortBy from '@components/SortBy'

// Types
import type { FilterProps } from '@components/Select/types'

// Constants
import sortOptions from './sortOptions'
import classnames from '@utils/classnames'

export default function ProductsSortBy(props: FilterProps) {
  return (
    <SortBy
      {...props}
      classLabel='w-32'
      options={sortOptions}
      textLabel="Ordenar productos por"
      containerClassName={classnames([props.containerClassName, 'w-full sm:w-[50%]'])}
    />
  )
}
