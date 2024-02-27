// Components
import EmptyScreen from '@components/EmptyScreen'

// Interfaces
import { ProductByCode } from '@modules/Product/api/interfaces'

// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

export default function UsageMode({ usageMode }: Pick<ProductByCode, 'usageMode'>) {
  if (!isString(usageMode) || isEmptyString(usageMode)) {
    return <EmptyScreen description="Este producto no posee una descripción sobre su modo de uso" />
  }

  return <p className="product-usage-mode font-poppins">- {usageMode}</p>
}
