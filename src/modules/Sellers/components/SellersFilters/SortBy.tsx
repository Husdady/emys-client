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
      noSelectionLabel="Ordenar vendedores por"
      containerClassName="w-full sm:w-[50%] xl:w-[33%]"
    />
  )
}
