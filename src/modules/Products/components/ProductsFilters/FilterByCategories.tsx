// Components
import Fallback from '@components/Fallback'
import FallbackItem from '@components/Fallback/FallbackItem'

// Hooks
import useCategoryList from '@modules/Products/hooks/useCategoryList'

// Interfaces
import { MultiSelectProps } from '@components/MultiSelect/interfaces'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const MultiSelect = lazy(() => import('@components/MultiSelect'))

export default function FilterByCategories(
  props: Pick<MultiSelectProps, 'onChange' | 'selectedValues'>
) {
  const { options, isError, isFetching, isLoading } = useCategoryList()

  if (isLoading || isFetching) {
    return <FallbackItem classLabel="w-20" classContainer="w-full sm:w-[50%]" />
  }

  return (
    <Fallback classLabel="w-20" classContainer="w-full sm:w-[50%]">
      <MultiSelect
        {...props}
        options={options}
        disabled={isError}
        canSearchOptions
        enableVirtualization
        textLabel="Categorías"
        containerClassName="w-full sm:w-[50%]"
        searchPalceholder="Ejemplo: Cajas 200ml"
        noSelectionLabel="Filtrar productos por categoría"
      />
    </Fallback>
  )
}
