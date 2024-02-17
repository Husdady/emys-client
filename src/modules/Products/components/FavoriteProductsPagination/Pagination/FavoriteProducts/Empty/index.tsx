// Components
import EmptyScreen from '@components/EmptyScreen'

// Hooks
import { useSearchParams } from 'next/navigation'

// Constants
import { EMPTY_FAVORITE_PRODUCTS, EMPTY_FILTERED_AVORITE_PRODUCTS } from './constants'

export default function EmptyFavoriteProduts() {
  const searchParams = useSearchParams()

  return (
    <EmptyScreen
      description={
        searchParams.size <= 0 ? EMPTY_FAVORITE_PRODUCTS : EMPTY_FILTERED_AVORITE_PRODUCTS
      }
    />
  )
}
