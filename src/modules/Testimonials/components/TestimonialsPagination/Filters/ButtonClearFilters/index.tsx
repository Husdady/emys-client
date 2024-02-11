// Librarys
import { Suspense } from 'react'

// Components
import ButtonClearFiltersFallback from '@components/ButtonClearFilters/Fallback'

// Hooks
import useButtonClearFilters from './useButtonClearFilters'

// Utils
import lazy from '@utils/lazy'

// Lazy Components
const ButtonClearFilters = lazy(() => import('@components/ButtonClearFilters'))

export default function CustomButtonClearFilters() {
  const { clear } = useButtonClearFilters()

  return (
    <Suspense fallback={<ButtonClearFiltersFallback />}>
      <ButtonClearFilters onClick={clear} />
    </Suspense>
  )
}
