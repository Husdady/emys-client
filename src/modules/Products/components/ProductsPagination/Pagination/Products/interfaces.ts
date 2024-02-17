// Interfaces
import { Product } from '@modules/Products/api/interfaces'

export interface ProductsProps {
  docs?: Product[]
  isFetching: boolean
}
