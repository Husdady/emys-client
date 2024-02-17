// Components
import ButtonShowFilters from '@components/ButtonShowFilters'

// Hooks
import useButtonShowFilters from './useButtonShowFilters'

export default function CustomButtonShowFilters() {
  const { show } = useButtonShowFilters()
  return <ButtonShowFilters onClick={show} />
}
