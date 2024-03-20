// COmponents
import List from '@modules/Product/components/List'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

export default function Characteristics({ characteristics }: Pick<Product, 'characteristics'>) {
  return <List items={characteristics} className="product-characteristics" />
}
