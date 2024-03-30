/* eslint-disable @typescript-eslint/no-misused-promises */
// Components
import SortBy from './SortBy'
import SearchFilter from '@components/SearchFilter'
import UbigeoFilters from '@modules/Ubigeo/components/UbigeoFilters'

// Hooks
import useTestimonialsFilters from './useTestimonialsFilters'

// Constants
import { TESTIMONIALS_FILTERS_FORM_ID } from './constants'
import { ubigeoConfigFilters } from './useTestimonialsFilters/constants'

export default function TestimonialsFiltersForm() {
  const {
    watch,
    submit,
    register,
    setValue,
    getValues,
    clearSeeker,
    handleSubmit,
    onChangeSortBy,
    deleteQueryParam,
    isShowingClearIcon,
    sortBySelectedOption
  } = useTestimonialsFilters()

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submit)}
      id={TESTIMONIALS_FILTERS_FORM_ID}
      className="testimonials-filters-form flex flex-col gap-y-3.5 mt-1.5 mb-3 sm:flex-col"
    >
      <UbigeoFilters
        watch={watch}
        setValue={setValue}
        getValues={getValues}
        config={ubigeoConfigFilters}
        deleteQueryParam={deleteQueryParam}
      />

      <SearchFilter
        onClear={clearSeeker}
        textLabelClassName="w-44"
        containerClassName="w-full"
        customInput={register('authorName')}
        placeholder="Ejemplo: Imanol Enrique..."
        textLabel="Buscar testimonios por nombre del autor"
        isShowingClearIcon={isShowingClearIcon}
      />

      <SortBy onChange={onChangeSortBy} selectedValue={sortBySelectedOption} />
    </form>
  )
}
