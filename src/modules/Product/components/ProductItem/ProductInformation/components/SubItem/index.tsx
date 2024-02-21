// Interfaces
import { SubItemProps } from './interfaces'

// Utils
import classnames from '@utils/classnames'

export default function SubItem({ value, field, className }: SubItemProps) {
  return (
    <span className={classnames([className, 'sub-item block'])}>
      <span className="sub-item-field text-gray-500">{field}</span>{' '}
      <span className="product-sku sub-item-value text-gray-600 font-semibold">{value}</span>
    </span>
  )
}
