// Components
import SortBy from '@components/SortBy'

// Types
import type { FilterProps } from '@components/Select/types'

// Constants
import { sortNameAndEmailOptions } from '@data/sortOptions'

export default function SellersSortBy(props: FilterProps) {
  return (
    <SortBy
      {...props}
      options={sortNameAndEmailOptions}
      textLabel="Ordenar vendedores por"
      containerClassName="w-full md:w-[50%]"
    />
  )
}
