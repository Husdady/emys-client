/* eslint-disable @typescript-eslint/no-misused-promises */
// Components
import SortBy from './SortBy'
import FilterByStatus from './FilterByStatus'
import SearchFilter from '@components/SearchFilter'
import UbigeoFilters from '@modules/Ubigeo/components/UbigeoFilters'

// Hooks
import useSellersFilters from './useSellersFilters'

// Constants
import { ubigeoConfigFilters } from './constants'

export default function SellersFiltersForm() {
  const {
    watch,
    submit,
    register,
    onFilter,
    setValue,
    getValues,
    emailField,
    phoneField,
    statusField,
    handleSubmit,
    onClear,
    onChangeSortBy,
    isMobileScreen,
    // isDesktopScreen,
    deleteQueryParam,
    handlePressEnter,
    isShowingClearIcon,
    sortBySelectedOption
  } = useSellersFilters()

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submit)}
      className="sellers-filters-form flex flex-col gap-y-3 mt-1.5 mb-3"
    >
      <SearchFilter
        onClear={onClear('fullname')}
        customInput={register('fullname')}
        onPressEnter={handlePressEnter('fullname')}
        isShowingClearIcon={isShowingClearIcon('fullname')}
        placeholder="Buscar vendedores por nombre..."
        textLabel="Nombre de vendedor"
        textLabelClassName="w-28"
      />

      <div className="flex items-center flex-wrap sm:flex-nowrap gap-x-2.5 gap-y-3">
        <SearchFilter
          type="number"
          onClear={onClear('dni')}
          customInput={register('dni')}
          onPressEnter={handlePressEnter('dni')}
          isShowingClearIcon={isShowingClearIcon('dni')}
          containerClassName="w-full md:w-[50%]"
          placeholder="Buscar vendedores por DNI..."
          textLabelClassName="w-8"
          textLabel="DNI"
        />

        <SearchFilter
          type="number"
          onClear={onClear('ruc')}
          customInput={register('ruc')}
          onPressEnter={handlePressEnter('ruc')}
          isShowingClearIcon={isShowingClearIcon('ruc')}
          containerClassName="w-full md:w-[50%]"
          placeholder="Buscar vendedores por RUC..."
          textLabelClassName="w-8"
          textLabel="RUC"
        />
      </div>

      {isMobileScreen && <SearchFilter {...emailField} />}
      {isMobileScreen && <FilterByStatus {...statusField} />}

      <UbigeoFilters
        watch={watch}
        setValue={setValue}
        getValues={getValues}
        config={ubigeoConfigFilters}
        deleteQueryParam={deleteQueryParam}
      />

      <div className="flex items-center flex-wrap sm:flex-nowrap gap-x-2.5 gap-y-3">
        {!isMobileScreen && (
          <SearchFilter {...emailField} containerClassName="sm:w-[50%] xl:w-[67%]" />
        )}

        <SortBy onChange={onChangeSortBy} selectedValue={sortBySelectedOption} />
      </div>
    </form>
  )
}
