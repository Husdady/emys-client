// Components
import Placeholder from './Placeholder'
import Categories from './Categories'
import InputLabel from '@components/InputLabel'

// Hooks
import useCategoryList from '@modules/Products/hooks/useCategoryList'

// Interfaces
import { FilterByCategoriesProps } from './interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

export default function FilterByCategories({ productType, ...props }: FilterByCategoriesProps) {
  const { options, isError, isFetching, isLoading } = useCategoryList({ productType: productType })

  if (isLoading || isFetching) {
    return <Placeholder />
  }

  if (isError || isEmptyArray(options)) return null

  return (
    <div className="filter-by-categories mb-1">
      <InputLabel title="Filtrar productos por categoría" />
      <Categories {...props} categories={options} />
    </div>
  )
}
