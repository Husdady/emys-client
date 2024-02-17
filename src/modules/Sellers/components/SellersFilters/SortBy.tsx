// Components
import SortBy from '@components/SortBy'

// Types
import type { FilterProps } from '@components/Select/types'

// Constants
import { sortNameAndEmailOptions } from '@assets/data/sort-options'

export default function SellersSortBy(props: FilterProps) {
  return (
    <SortBy
      {...props}
      options={sortNameAndEmailOptions}
      containerClassName="w-full md:w-[50%]"
      noSelectionLabel="Ordenar vendedores por"
    />
  )
}
