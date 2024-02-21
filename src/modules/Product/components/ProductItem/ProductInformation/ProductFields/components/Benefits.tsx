// Components
import EmptyScreen from '@components/EmptyScreen'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

export default function Benefits({ benefits }: Pick<Product, 'benefits'>) {
  if (!Array.isArray(benefits) || isEmptyArray(benefits)) {
    return <EmptyScreen description="Este producto no posee beneficios" />
  }

  return (
    <ul className="product-benefits list-disc pl-5">
      {benefits.map((benefit, i) => (
        <li key={String(i)} className="product-benefit font-poppins">
          {benefit}
        </li>
      ))}
    </ul>
  )
}
