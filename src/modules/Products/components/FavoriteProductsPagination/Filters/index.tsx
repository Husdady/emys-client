// Components
import InputSearch from './InputSearch'
import ButtonShowFilters from './ButtonShowFilters'
import ButtonClearFilters from '@components/ButtonClearFilters'

// Containers
import FiltersContainer from '@containers/FiltersContainer'

export default function Filters() {
  return (
    <FiltersContainer
      inputSearch={<InputSearch />}
      className="main-favorite-products-filters"
      buttons={
        <>
          <ButtonShowFilters />
          <ButtonClearFilters />
        </>
      }
    />
  )
}
