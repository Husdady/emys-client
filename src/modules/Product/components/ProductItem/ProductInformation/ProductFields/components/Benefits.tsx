// COmponents
import List from '@modules/Product/components/List'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

export default function Benefits({ benefits }: Pick<Product, 'benefits'>) {
  return <List items={benefits} className="product-benefits" />
}
