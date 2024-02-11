// Components
import InputSearch from './InputSearch'
import ButtonShowFilters from './ButtonShowFilters'
import ButtonClearFilters from './ButtonClearFilters'

export default function Filters() {
  return (
    <section className="main-testimonials-filters flex items-center gap-2.5 mt-4 mb-6 mx-auto max-w-[1130px] px-6">
      <InputSearch />

      <div className="wrapper-buttons flex items-center gap-x-1.5 gap-y-2.5">
        <ButtonShowFilters />
        <ButtonClearFilters />
      </div>
    </section>
  )
}
