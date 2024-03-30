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
import { ubigeoConfigFilters, SELLERS_FILTERS_FORM_ID } from './constants'

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
      className="sellers-filters-form flex flex-col gap-y-3 mt-1.5"
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
        textLabel="Buscar vendedores por nombre..."
        placeholder="Ejemplo: Imanol Enrique..."
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
          textLabel="Buscar vendedores por DNI"
          placeholder="Ejemplo 74232337..."
          textLabelClassName="w-32"
        />

        <SearchFilter
          type="number"
          onClear={onClear('ruc')}
          customInput={register('ruc')}
          onPressEnter={handlePressEnter('ruc')}
          isShowingClearIcon={isShowingClearIcon('ruc')}
          containerClassName="w-full sm:w-[50%]"
          textLabel="Buscar vendedores por RUC"
          placeholder="Ejemplo: 7423233710..."
          textLabelClassName="w-32"
        />
      </div>

      <div className="flex items-center flex-wrap sm:flex-nowrap gap-x-2.5 gap-y-3">
        <SearchFilter
          type="email"
          textLabelClassName="w-28"
          onClear={onClear('email')}
          customInput={register('email')}
          onPressEnter={handlePressEnter('email')}
          isShowingClearIcon={isShowingClearIcon('email')}
          textLabel="Buscar vendedores por correo electrónico"
          containerClassName="w-full sm:w-[50%] email-field"
          placeholder="Ejemplo: husdadymena@gm..."
        />

        <SearchFilter
          type="number"
          textLabelClassName="w-24"
          onClear={onClear('phone')}
          customInput={register('phone')}
          containerClassName="w-full sm:w-[50%]"
          onPressEnter={handlePressEnter('phone')}
          isShowingClearIcon={isShowingClearIcon('phone')}
          textLabel="Buscar vendedores por número telefónico"
          placeholder="Ejemplo: 952 968 893..."
        />
      </div>
    </form>
  )
}
