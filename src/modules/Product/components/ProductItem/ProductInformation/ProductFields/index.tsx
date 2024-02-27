// Librarys
import { Collapse } from 'antd/lib'

// Components
import ChevronDown from '@assets/icons/chevron-down'

// Hooks
import useProductInformation from './useProductFields'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

// Constants
import { PRODUCT_DESCRIPTION } from './constants'

export default function ProductFields(product: Product) {
  const { items, activeKey, handleChangeKey } = useProductInformation(product)

  return (
    <Collapse
      items={items}
      destroyInactivePanel
      activeKey={activeKey}
      onChange={handleChangeKey}
      className="product-fields mt-4"
      defaultActiveKey={PRODUCT_DESCRIPTION}
      expandIcon={() => <ChevronDown />}
    />
  )
}
