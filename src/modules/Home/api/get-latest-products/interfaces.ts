// Interfaces
import { Product } from '@modules/Products/api/interfaces'

export interface LatestProducts {
  latestProducts: Product[]
}

export interface LatestProductsArgs {
  limit: number
  populate?: boolean
}
