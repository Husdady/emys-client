// Components
import EmptyScreen from '@components/EmptyScreen'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

export default function UsageMode({ usageMode }: Pick<Product, 'usageMode'>) {
  if (!isString(usageMode) || isEmptyString(usageMode)) {
    return <EmptyScreen description="Este producto no posee una descripción sobre su modo de uso" />
  }

  return <p className="product-usage-mode font-poppins">- {usageMode}</p>
}