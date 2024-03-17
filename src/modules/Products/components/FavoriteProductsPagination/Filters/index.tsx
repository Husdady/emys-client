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
      className="main-favorite-products-filters"
      buttons={
        <div className="wrapper-buttons flex items-center gap-x-1.5 gap-y-2.5">
          <ButtonShowFilters />
          <ButtonClearFilters />
        </div>
      }
    />
  )
}
