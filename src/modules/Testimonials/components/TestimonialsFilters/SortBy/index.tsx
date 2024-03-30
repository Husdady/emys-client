// Components
import SortBy from '@components/SortBy'

// Types
import type { FilterProps } from '@components/Select/types'

// Constants
import { sortOptions } from './options'

export default function TestimonialsSortBy(props: FilterProps) {
  return (
    <SortBy
      {...props}
      options={sortOptions}
      containerClassName="w-full"
      textLabel="Ordenar testimonios por"
    />
  )
}
