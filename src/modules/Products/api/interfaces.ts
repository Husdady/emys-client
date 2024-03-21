// Types
import type { WeightType, CurrencyType, ProductType, CustomProductFieldsType } from './types'

// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'
import { Image, TimeStamps } from '@libs/axios/interfaces'
import { Category } from '@modules/Categories/api/interfaces'
import { Country } from '@modules/Ubigeo/api/countries/interfaces'
import { PaginationArgs, GraphQLPagination } from '@libs/graphql/interfaces'

export interface CustomProductField extends TimeStamps {
  id: string
  fieldName: string
  type: CustomProductFieldsType
}

export interface ExtraInformation {
  fieldId: string
  textValue?: string
  listValues?: string[]
}

export interface Product extends TimeStamps {
  id: string
  name: string
  code: string
  tags: string[]
  type: ProductType
  countryId: string
  isInStock: boolean
  countryOrigin: Country
  coverImage?: Image | null
  coverImageId?: string | null
  totalVisits?: number | null
  totalUnits?: number | null
  mainSeller?: Seller | null
  mainSellerId?: string | null
  alliedSellers: Seller[]
  alliedSellersId: string[]
  extraInformation: ExtraInformation[] | null
  relatedProducts: Product[]
  relatedProductsId: string[]
  content?: string | null
  usageMode?: string | null
  price: number
  maker: string
  weight: number
  weightType: WeightType
  currencyType: CurrencyType
  description: string
  categories?: Category[] | null
  categoriesId?: string[] | null
  benefits: string[]
  ingredients: string[]
  characteristics: string[]
  images: Image[] | null
  imagesId: string[] | null
  customProductFields: CustomProductField[] | null
  customProductFieldsId?: string[] | null
}

export interface ProductId {
  productId: string
}

export interface AddProductToFavoritesParams {
  data: ProductId
  signOut?: () => void
}

export interface RemoveProductFromFavoritesParams extends ProductId {
  signOut?: () => void
}

export interface Products {
  products: GraphQLPagination<Product[]>
}

export interface FavoriteProducts {
  myFavoriteProducts: GraphQLPagination<Product[]>
}

export interface ProductsPaginationArgs extends PaginationArgs {
  code?: string
  maker?: string
  minPrice?: number
  maxPrice?: number
  countryId?: string
  totalUnits?: number
  populate?: boolean
  isInStock?: boolean
  productName?: string
  categories?: string[]
  excludeProducts?: string[]
}

export interface FavoriteProductsPaginationArgs extends ProductsPaginationArgs {
  favoriteProductsId: string[]
}
