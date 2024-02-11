// Librarys
import { Suspense } from 'react'

// Components
import ButtonShowFiltersFallback from '@components/ButtonShowFilters/Fallback'

// Hooks
import useButtonShowFilters from './useButtonShowFilters'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const ButtonShowFilters = lazy(() => import('@components/ButtonShowFilters'))

export default function CustomButtonShowFilters() {
  const { show } = useButtonShowFilters()

  return (
    <Suspense fallback={<ButtonShowFiltersFallback />}>
      <ButtonShowFilters onClick={show} />
    </Suspense>
  )
}
