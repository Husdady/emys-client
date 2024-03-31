// Interfaces
import { ProductsPaginationArgs } from '@modules/Products/api/interfaces'

export interface ProductsFiltersState
  extends Pick<ProductsPaginationArgs, 'sortBy' | 'sortType' | 'categories'> {
  type?: string
  maxPrice?: string
  minPrice?: string
  isInStock?: string
  productName?: string
}
