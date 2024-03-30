// Components
import Placeholder from '@modules/Products/components/Product/Placeholder'

// Hooks
import useDocumentCount from '@root/src/hooks/useDocumentCount'

// Utils
import createList from '@utils/createList'

// Constants
import { FAVORITE_PRODUCTS_COUNT } from './constants'
import { LIMIT } from '@modules/Products/api/constants'

export default function FavoriteProductsPlaceholder() {
  // Get count of the filtered documents
  const count = useDocumentCount({
    defaultLimit: LIMIT,
    filterId: FAVORITE_PRODUCTS_COUNT
  })

  return (
    <ul className="favorite-product-list">
      {createList(count).map((i) => (
        <li key={String(i)} className="favorite-product-item">
          <Placeholder />
        </li>
      ))}
    </ul>
  )
}
