// Components
import Placeholder from '@modules/Products/components/Product/Placeholder'

// Hooks
import useDocumentCount from '@hooks/useDocumentCount'

// Utils
import createList from '@utils/createList'

// Constants
import { PRODUCTS_COUNT } from './constants'
import { LIMIT } from '@modules/Products/api/constants'

export default function ProductsPlaceholder() {
  // Get count of the filtered documents
  const count = useDocumentCount({
    defaultLimit: LIMIT,
    filterId: PRODUCTS_COUNT
  })

  return (
    <ul className="product-list">
      {createList(count).map((i) => (
        <li key={String(i)} className="product-item">
          <Placeholder />
        </li>
      ))}
    </ul>
  )
}
