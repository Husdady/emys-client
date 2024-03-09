// Components
import InputSearch from './InputSearch'
import ButtonShowFilters from './ButtonShowFilters'
import ButtonClearFilters from '@components/ClearFiltersButton'

// Containers
import FiltersContainer from '@containers/FiltersContainer'

export default function Filters() {
  return (
    <FiltersContainer
      inputSearch={<InputSearch />}
      className="main-testimonials-filters"
      buttons={
        <>
          <ButtonShowFilters />
          <ButtonClearFilters />
        </>
      }
    />
  )
}
