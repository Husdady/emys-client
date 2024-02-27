// Librarys
import { Collapse } from 'antd/lib'

// Components
import ChevronDown from '@assets/icons/chevron-down'

// Hooks
import useProductInformation from './useProductFields'

// Interfaces
import { ProductByCode } from '@modules/Product/api/interfaces'

// Constants
import { PRODUCT_DESCRIPTION } from './constants'

export default function ProductFields(product: ProductByCode) {
  const { items, activeKey, handleChangeKey } = useProductInformation(product)

  return (
    <Collapse
      items={items}
      activeKey={activeKey}
      onChange={handleChangeKey}
      className="product-fields my-4"
      defaultActiveKey={PRODUCT_DESCRIPTION}
      expandIcon={() => <ChevronDown />}
    />
  )
}
