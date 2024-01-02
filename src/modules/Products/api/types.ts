// Constants
import {
  GRAMS,
  KILOGRAMS,
  SEYTU_TYPE,
  OMNILIFE_TYPE,
  PRODUCT_TYPE,
  SUNS_CURRENCY,
  DOLLARS_CURRENCY,
  LIST_TYPE,
  TEXT_TYPE,
  LARGE_TEXT_TYPE
} from './constants'

// Types
export type WeightType = typeof GRAMS | typeof KILOGRAMS
export type CurrencyType = typeof SUNS_CURRENCY | typeof DOLLARS_CURRENCY
export type OmnilifeProductType = typeof SEYTU_TYPE | typeof OMNILIFE_TYPE
export type ProductType = typeof PRODUCT_TYPE | OmnilifeProductType
export type CustomProductFieldsType = typeof LIST_TYPE | typeof TEXT_TYPE | typeof LARGE_TEXT_TYPE
