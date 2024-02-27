// Components
import EmptyScreen from '@components/EmptyScreen'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

// Utils
import isEmptyArray from '@utils/isEmptyArray'

export default function Characteristics({ characteristics }: Pick<Product, 'characteristics'>) {
  if (!Array.isArray(characteristics) || isEmptyArray(characteristics)) {
    return <EmptyScreen description="Este producto no posee características" />
  }

  return (
    <ul className="product-characteristics list-disc pl-5 flex flex-col gap-y-1">
      {characteristics.map((characteristic, i) => (
        <li key={String(i)} className="product-characteristic font-poppins">{characteristic}</li>
      ))}
    </ul>
  )
}
