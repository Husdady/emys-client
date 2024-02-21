// Interface
import { Product } from '@modules/Products/api/interfaces'

export interface ProductItem {
  product?: Product | null
}

export interface ProductArgs {
  code: string
}
