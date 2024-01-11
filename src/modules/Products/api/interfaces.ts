// Types
import type { WeightType, CurrencyType, ProductType, CustomProductFieldsType } from './types'

// Interfaces
import { Seller } from '@modules/Sellers/api/interfaces'
import { Image, TimeStamps } from '@libs/axios/interfaces'
import { Country } from '@modules/Ubigeo/api/countries/interfaces'

export interface Category extends TimeStamps {
  id: string
  name: string
  type: ProductType
}

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
  tags: string[]
  origin: string
  countryOrigin: Country
  type: ProductType
  coverImage?: Image | null
  coverImageId?: string | null
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
