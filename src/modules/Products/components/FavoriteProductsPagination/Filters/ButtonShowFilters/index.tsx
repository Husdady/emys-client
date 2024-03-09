// Components
import ButtonShowFilters from '@components/ShowFiltersButton'

// Hooks
import useButtonShowFilters from './useButtonShowFilters'

export default function CustomButtonShowFilters() {
  const { show } = useButtonShowFilters()
  return <ButtonShowFilters onClick={show} />
}
