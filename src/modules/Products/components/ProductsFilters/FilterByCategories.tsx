// Librarys
import { Suspense } from 'react'

// Components
import Fallback from '@components/Select/Fallback'

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
    return <Fallback className="w-full sm:w-[50%]" textLabelClassName="w-20" />
  }

  return (
    <Suspense fallback={<Fallback className="w-full sm:w-[50%]" textLabelClassName="w-20" />}>
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
    </Suspense>
  )
}
