// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'

export interface LatestSellers {
  latestSellers: Seller[]
}

export interface LatestSellersArgs {
  limit: number
  populate?: boolean
}
