// Components
import PlaceholderItem from './Item'

// Constants
import { MINIMUN_PLACEHOLDER_PRODUCTS } from './constants'

export default function Placeholder() {
  return (
    <ul className="product-items flex items-start gap-x-4 overflow-x-auto px-3 pb-4">
      {MINIMUN_PLACEHOLDER_PRODUCTS.map((i) => (
        <li key={String(i)} className="product-item">
          <PlaceholderItem />
        </li>
      ))}
    </ul>
  )
}
