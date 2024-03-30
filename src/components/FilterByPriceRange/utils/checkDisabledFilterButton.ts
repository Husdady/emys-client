// Utils
import isString from '@utils/isString'
import isEmptyString from '@utils/isEmptyString'

// Constants
import { MIN, MAX } from '@components/FilterByPriceRange/constants'

interface QueryParams {
  minPrice?: number
  maxPrice?: number
}

interface Params {
  query: QueryParams
  minPrice?: string
  maxPrice?: string
}

/**
 * Check if the Filter button is disabled
 * @param {Params} params Receive a 'query', 'minPrice' and 'maxPrice'
 * @returns {boolean} Boolean
 */
export default function checkDisabledFilterButton({ query, minPrice, maxPrice }: Params): boolean {
  return (
    !isString(minPrice) ||
    !isString(maxPrice) ||
    isEmptyString(minPrice) ||
    isEmptyString(maxPrice) ||
    (Number(minPrice) === MIN && Number(maxPrice) === MAX) ||
    (minPrice === String(query.minPrice) && maxPrice === String(query.maxPrice))
  )
}
