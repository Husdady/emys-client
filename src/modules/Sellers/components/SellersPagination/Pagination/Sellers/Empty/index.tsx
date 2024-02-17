// Components
import EmptyScreen from '@components/EmptyScreen'

// Hooks
import { useSearchParams } from 'next/navigation'

// Constants
import { EMPTY_SELLERS, EMPTY_FILTERED_SELLERS } from './constants'

export default function EmptySellers() {
  const searchParams = useSearchParams()

  return (
    <EmptyScreen description={searchParams.size <= 0 ? EMPTY_SELLERS : EMPTY_FILTERED_SELLERS} />
  )
}
