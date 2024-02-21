// Librarys
import { Collapse } from 'antd/lib'

// Components
import ChevronDown from '@assets/icons/chevron-down'

// Hooks
import useProductInformation from './useProductFields'

// Interfaces
import { Product } from '@modules/Products/api/interfaces'

// Constants
import { PRODUCT_DESCRIPTION } from './constants'

export default function ProductFields(product: Product) {
  const { items } = useProductInformation(product)

  return (
    <Collapse
      items={items}
      className="product-fields my-4"
      defaultActiveKey={PRODUCT_DESCRIPTION}
      expandIcon={() => <ChevronDown />}
    />
  )
}
