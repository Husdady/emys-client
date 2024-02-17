// Components
import EmptyScreen from '@components/EmptyScreen'

// Hooks
import { useSearchParams } from 'next/navigation'

// Constants
import { EMPTY_PRODUCTS, EMPTY_FILTERED_PRODUCTS } from './constants'

export default function EmptyProduts() {
  const searchParams = useSearchParams()

  return (
    <EmptyScreen description={searchParams.size <= 0 ? EMPTY_PRODUCTS : EMPTY_FILTERED_PRODUCTS} />
  )
}
