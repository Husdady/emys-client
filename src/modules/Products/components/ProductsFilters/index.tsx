/* eslint-disable @typescript-eslint/no-misused-promises */
// Components
import SortBy from './SortBy'
import ByStock from './ByStock'
import ProductType from './ProductType'
import Fallback from '@components/Fallback'
import SearchFilter from '@components/SearchFilter'
import FilterByCategories from './FilterByCategories'

// Hooks
import useProductsFilters from './useProductsFilters'

// Utils
import lazy from '@utils/lazy'
import isString from '@utils/isString'

// Constants
import { ALL } from './ProductType/constants'
import { PRODUCTS_FILTERS_FORM_ID } from './constants'

// Lazy Components
const FilterByPriceRange = lazy(() => import('@components/FilterByPriceRange'))

export default function ProductsFiltersForm() {
  const {
    watch,
    submit,
    register,
    change,
    onClear,
    changePrice,
    handleSubmit,
    onChangeSortBy,
    isActiveCategory,
    toggleCategoryId,
    isShowingClearIcon,
    onChangePriceRange,
    onChangeProductType,
    sortBySelectedOption,
    isDisableApplyPriceFilterButton
  } = useProductsFilters()

  return (
    <form
      noValidate
      id={PRODUCTS_FILTERS_FORM_ID}
      onSubmit={handleSubmit(submit)}
      className="products-filters-form flex flex-col gap-y-3 sm:gap-y-3.5 mt-1.5"
    >
      <ProductType defaultOption={watch('type')} onChange={onChangeProductType} />

      <FilterByCategories
        isActiveCategory={isActiveCategory}
        toggleCategoryId={toggleCategoryId}
        productType={watch('type') === ALL ? undefined : watch('type')}
      />

      <SearchFilter
        textLabelClassName="w-40"
        containerClassName="w-full"
        placeholder="Ejemplo: Laptop ASUS..."
        textLabel="Buscar productos por nombre"
        isShowingClearIcon={isShowingClearIcon('productName')}
        customInput={register('productName')}
        onClear={onClear('productName')}
      />

      <div className="flex flex-col items-center sm:flex-row flex-wrap sm:flex-nowrap gap-x-3 gap-y-3 sm:gap-y-3.5 justify-between">
        <ByStock selectedValue={watch('isInStock')} onChange={change('isInStock')} />
        <SortBy onChange={onChangeSortBy} selectedValue={sortBySelectedOption} />
      </div>

      <Fallback classLabel="w-28" classComp="h-[142.28px] sm:h-[90.33px]">
        <FilterByPriceRange
          hideButtonApplyFilters
          innerClassName="w-full"
          textLabel="Rango de precios"
          buttonTitle="Filtrar por precio"
          onChangePriceRange={onChangePriceRange}
          containerClassName="flex-wrap sm:flex-nowrap"
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
