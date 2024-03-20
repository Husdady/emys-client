// COmponents
import List from '@modules/Product/components/List'

// Interfaces
import { Product } from '@modules/Product/api/interfaces'

export default function Ingredients({ ingredients }: Pick<Product, 'ingredients'>) {
  return <List items={ingredients} className="product-ingredients" />
}
