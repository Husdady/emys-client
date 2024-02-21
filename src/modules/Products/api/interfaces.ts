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
  textValue?: string
  listValues?: string[]
  customProductFieldId: string
}

export interface Product extends TimeStamps {
  id: string
  name: string
  code: string
  tags: string[]
  origin: string
  countryOrigin: Country
  type: ProductType
  coverImage?: Image | null
  coverImageId?: string | null
  totalVisits?: number | null
  isInStock: boolean
  isShowingPrice: boolean
  totalUnits?: number | null
  mainSeller?: Seller | null
  mainSellerId?: string | null
  alliedSellers: Seller[]
  alliedSellersId: string[]
  extraInformation: ExtraInformation[]
  relatedProducts: Product[]
  relatedProductsId: string[]
  content?: string | null
  usageMode?: string | null
  sku: string
  price: number
  maker: string
  weight: number
  weightType: WeightType
  currencyType: CurrencyType
  description: string
  categories?: Category[] | null
  categoriesId?: string[] | null
  benefits: string[]
  characteristics: string[]
  images: Image[] | null
  imagesId: string[] | null
  customProductFields: CustomProductField[]
  customProductFieldsId?: string[] | null
}

export interface ProductId {
  productId: string
}

export interface ProductIdParams {
  data: ProductId
}

export interface Products {
  products: GraphQLPagination<Product[]>
}

export interface FavoriteProducts {
  myFavoriteProducts: GraphQLPagination<Product[]>
}

export interface ProductsPaginationArgs extends PaginationArgs {
  sku?: string
  code?: string
  maker?: string
  origin?: string
  minPrice?: number
  maxPrice?: number
  isInStock?: boolean
  totalUnits?: number
  populate?: boolean
  productName?: string
  categories?: string[]
  excludeProducts?: string[]
}

export interface FavoriteProductsPaginationArgs extends ProductsPaginationArgs {
  favoriteProductsId: string[]
}
