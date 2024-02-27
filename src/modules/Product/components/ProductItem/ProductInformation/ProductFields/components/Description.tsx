// Components
import EmptyScreen from '@components/EmptyScreen'

// Interfaces
import { ProductByCode } from '@modules/Product/api/interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

export default function Description({ description }: Pick<ProductByCode, 'description'>) {
  if (!isString(description) || isEmptyString(description)) {
    return <EmptyScreen description="Este producto no posee una descripción" />
  }

  return <p className="product-description font-poppins">- {description}</p>
}
