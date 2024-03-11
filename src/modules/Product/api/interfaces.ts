// Interface
import { ProductId, Product as ProductModel } from '@modules/Products/api/interfaces'

export interface Product extends ProductModel {
  userRating: number | null
}

export interface ProductItem {
  product?: Product | null
}

export interface ProductItemWithSession {
  productWithSession?: Product | null
}

export interface PopularProducts {
  popularProducts: Product[]
}

export interface ProductArgs {
  code: string
}

export interface PopularProductsArgs {
  limit: number
  sortRandomly?: boolean
  excludeProductsByCode: string[]
}

export interface RatingBody {
  rating: number
}

export interface VisitProductParams extends ProductId {
  signOut?: () => void
}

export interface RateProductParams extends ProductId {
  data: RatingBody
  signOut?: () => void
}
