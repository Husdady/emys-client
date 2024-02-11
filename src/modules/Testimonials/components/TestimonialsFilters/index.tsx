/* eslint-disable @typescript-eslint/no-misused-promises */
// Librarys
import { createId } from '@libs/nanoid'

// Components
import SortBy from './SortBy'
import SearchFilter from '@components/SearchFilter'
import UbigeoFilters from '@modules/Ubigeo/components/UbigeoFilters'

// Hooks
import useTestimonialsFilters from './useTestimonialsFilters'

// Constants
import { ubigeoConfigFilters } from './useTestimonialsFilters/constants'

export const TESTIMONIALS_FILTERS_FORM_ID = createId()

export default function TestimonialsFiltersForm() {
  const {
    watch,
    submit,
    handleSubmit,
    setValue,
    getValues,
    authorField,
    onChangeSortBy,
    deleteQueryParam,
    sortBySelectedOption
  } = useTestimonialsFilters()

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submit)}
      id={TESTIMONIALS_FILTERS_FORM_ID}
      className="testimonials-filters-form flex flex-col gap-y-3.5 mt-1.5 mb-3 sm:flex-col"
    >
      <div className="flex flex-col items-center sm:flex-row gap-x-3 gap-y-3.5">
        <SearchFilter {...authorField} />
        <SortBy onChange={onChangeSortBy} selectedValue={sortBySelectedOption} />
      </div>

      <UbigeoFilters
        watch={watch}
        setValue={setValue}
        getValues={getValues}
        config={ubigeoConfigFilters}
        deleteQueryParam={deleteQueryParam}
      />
    </form>
  )
}
