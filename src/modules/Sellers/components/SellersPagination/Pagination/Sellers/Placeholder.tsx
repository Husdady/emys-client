// Components
import Placeholder from '@modules/Sellers/components/Seller/Placeholder'

// Hooks
import useDocumentCount from '@hooks/useDocumentCount'

// Utils
import createList from '@utils/createList'

// Constants
import { SELLERS_COUNT } from './constants'
import { LIMIT } from '@modules/Sellers/api/constants'

export default function SellersPlaceholder() {
  // Get count of the filtered documents
  const count = useDocumentCount({
    defaultLimit: LIMIT,
    filterId: SELLERS_COUNT
  })

  return (
    <ul className="seller-list">
      {createList(count).map((i) => (
        <li key={String(i)} className="seller-item">
          <Placeholder />
        </li>
      ))}
    </ul>
  )
}
