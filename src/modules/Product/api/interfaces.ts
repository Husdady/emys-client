// Interface
import { Product, ProductId } from '@modules/Products/api/interfaces'

export interface ProductByCode extends Product {
  userRating: number | null
}

export interface ProductItem {
  product?: ProductByCode | null
}

export interface ProductItemWithSession {
  productWithSession?: ProductByCode | null
}

export interface ProductArgs {
  code: string
}

export interface RatingBody {
  rating: number
}

export interface RateProductParams extends ProductId {
  data: RatingBody
  signOut?: () => void
}
