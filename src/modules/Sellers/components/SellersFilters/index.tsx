/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import { createId } from '@libs/nanoid'

// Components
import SortBy from './SortBy'
import FilterByStatus from './FilterByStatus'
import SearchFilter from '@components/SearchFilter'
import UbigeoFilters from '@modules/Ubigeo/components/UbigeoFilters'

// Hooks
import useSellersFilters from './useSellersFilters'

// Constants
import { ubigeoConfigFilters } from './constants'

export const SELLERS_FILTERS_FORM_ID = createId()

export default function SellersFiltersForm() {
  const {
    watch,
    submit,
    register,
    setValue,
    getValues,
    handleSubmit,
    onClear,
    onChangeSortBy,
    onChangeStatus,
    deleteQueryParam,
    handlePressEnter,
    isShowingClearIcon,
    sortBySelectedOption
  } = useSellersFilters()

  return (
    <form
      noValidate
      id={SELLERS_FILTERS_FORM_ID}
      onSubmit={handleSubmit(submit)}
      className="sellers-filters-form flex flex-col gap-y-3 mt-1.5 mb-3"
    >
      <UbigeoFilters
        watch={watch}
        setValue={setValue}
        getValues={getValues}
        config={ubigeoConfigFilters}
        deleteQueryParam={deleteQueryParam}
      />

      <div className="flex items-center flex-wrap sm:flex-nowrap gap-x-2.5 gap-y-3">
        <FilterByStatus onChange={onChangeStatus} selectedValue={getValues('status')} />
        <SortBy onChange={onChangeSortBy} selectedValue={sortBySelectedOption} />
      </div>

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
          containerClassName="w-full sm:w-[50%]"
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
          containerClassName="w-full sm:w-[50%]"
          placeholder="Buscar vendedores por RUC..."
          textLabelClassName="w-8"
          textLabel="RUC"
        />
      </div>

      <div className="flex items-center flex-wrap sm:flex-nowrap gap-x-2.5 gap-y-3">
        <SearchFilter
          type="email"
          textLabelClassName="w-28"
          textLabel="Correo electrónico"
          onClear={onClear('email')}
          customInput={register('email')}
          containerClassName="w-full sm:w-[50%] email-field"
          onPressEnter={handlePressEnter('email')}
          isShowingClearIcon={isShowingClearIcon('email')}
          placeholder="Buscar vendedores por correo electrónico..."
        />

        <SearchFilter
          type="number"
          textLabelClassName="w-24"
          textLabel="Número telefónico"
          onClear={onClear('phone')}
          customInput={register('phone')}
          containerClassName="w-full sm:w-[50%]"
          onPressEnter={handlePressEnter('phone')}
          isShowingClearIcon={isShowingClearIcon('phone')}
          placeholder="Buscar vendedores por número telefónico..."
        />
      </div>
    </form>
  )
}
