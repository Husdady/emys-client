/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import { createId } from '@libs/nanoid'

// Components
import SortBy from './SortBy'
import ByStock from './ByStock'
import Fallback from '@components/Fallback'
import SearchFilter from '@components/SearchFilter'
import FilterByCategories from './FilterByCategories'
import FilterByCountry from '@modules/Ubigeo/components/FilterByCountry'

// Hooks
import useProductsFilters from './useProductsFilters'

// Utils
import lazy from '@utils/lazy'
import isString from '@utils/isString'

// Lazy Components
const FilterByPriceRange = lazy(() => import('@components/FilterByPriceRange'))

export const PRODUCTS_FILTERS_FORM_ID = createId()

export default function ProductsFiltersForm() {
  const {
    watch,
    submit,
    register,
    getValues,
    handleSubmit,
    change,
    onClear,
    onFilter,
    changePrice,
    isShowingClearIcon,
    onChangeSortBy,
    onPickCategories,
    onChangePriceRange,
    sortBySelectedOption,
    isDisableApplyPriceFilterButton
  } = useProductsFilters()

  return (
    <form
      noValidate
      id={PRODUCTS_FILTERS_FORM_ID}
      onSubmit={handleSubmit(submit)}
      className="products-filters-form flex flex-col gap-y-3 mt-1.5 mb-3"
    >
      <SearchFilter
        textLabelClassName="w-32"
        containerClassName="w-full"
        textLabel="Nombre del producto"
        placeholder="Buscar productos por nombre..."
        isShowingClearIcon={isShowingClearIcon('productName')}
        customInput={register('productName')}
        onClear={onClear('productName')}
      />

      <div className="flex flex-col items-center sm:flex-row flex-wrap sm:flex-nowrap gap-x-2.5 gap-y-3">
        <SearchFilter
          textLabel="Código"
          textLabelClassName="w-20"
          onClear={onClear('code')}
          customInput={register('code')}
          containerClassName="w-full sm:w-[50%]"
          placeholder="Buscar productos por código..."
          isShowingClearIcon={isShowingClearIcon('code')}
        />

        <SearchFilter
          textLabelClassName="w-28"
          textLabel="Código Referencial"
          containerClassName="w-full sm:w-[50%]"
          placeholder="Buscar productos por código referencial..."
          isShowingClearIcon={isShowingClearIcon('sku')}
          customInput={register('sku')}
          onClear={onClear('sku')}
        />
      </div>

      <div className="flex flex-col items-center sm:flex-row flex-wrap sm:flex-nowrap gap-x-2.5 gap-y-3 justify-between">
        <SearchFilter
          type="number"
          textLabel="Unidades"
          textLabelClassName="w-20"
          containerClassName="w-full sm:w-[50%]"
          placeholder="Buscar productos por total de unidades..."
          isShowingClearIcon={isShowingClearIcon('totalUnits')}
          customInput={register('totalUnits')}
          onClear={onClear('totalUnits')}
        />

        <ByStock selectedValue={watch('isInStock')} onChange={change('isInStock')} />
      </div>

      <div className="flex flex-col items-center flex-col-reverse sm:flex-row flex-wrap sm:flex-nowrap gap-x-2.5 gap-y-3 justify-between">
        <SearchFilter
          textLabel="Fabricante"
          textLabelClassName="w-24"
          onClear={onClear('maker')}
          customInput={register('maker')}
          containerClassName="w-full sm:w-[50%]"
          placeholder="Buscar productos por fabricante..."
          isShowingClearIcon={isShowingClearIcon('maker')}
        />

        <SortBy onChange={onChangeSortBy} selectedValue={sortBySelectedOption} />
      </div>

      <div className="flex flex-col items-center sm:flex-row flex-wrap sm:flex-nowrap gap-x-2.5 gap-y-3">
        <FilterByCountry
          textLabel="País de origen"
          onChange={change('origin')}
          selectedValue={watch('origin')}
          containerClassName="w-full sm:w-[50%]"
          noSelectionLabel="Filtrar productos por país de origen"
        />

        <FilterByCategories onChange={onPickCategories} selectedValues={getValues('categories')} />
      </div>

      <Fallback classLabel="w-28">
        <FilterByPriceRange
          onApplyPriceFilter={onFilter}
          onChangePriceRange={onChangePriceRange}
          innerClassName="w-full"
          textLabel="Rango de precios"
          buttonTitle="Filtrar por precio"
          containerClassName="flex-wrap sm:flex-nowrap"
          buttonClassName="w-full sm:min-w-[123px] sm:max-w-[123px] !px-2"
          isDisableApplyPriceFilterButton={isDisableApplyPriceFilterButton}
          minPrice={isString(watch('minPrice')) ? Number(watch('minPrice')) : undefined}
          maxPrice={isString(watch('maxPrice')) ? Number(watch('maxPrice')) : undefined}
          onChangeMinPrice={changePrice('minPrice')}
          onChangeMaxPrice={changePrice('maxPrice')}
        />
      </Fallback>
    </form>
  )
}
