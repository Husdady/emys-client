// Librarys
import { Collapse } from 'antd/lib'

// Components
import ChevronDown from '@components/Icons/ChevronDown'

// Hooks
import useProductFields from './useProductFields'

// Interfaces
import { ProductFieldsProps } from './interfaces'

// Constants
import { PRODUCT_DESCRIPTION } from './constants'

export default function ProductFields(props: ProductFieldsProps) {
  const { items, activeKey, handleChangeKey } = useProductFields(props)

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
