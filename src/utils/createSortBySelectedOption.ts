// Types
import type { FieldValues } from 'react-hook-form'

// Utils
import isString from './isString'

/**
 * Create SortBy option selected
 * @param {FieldValues} query Query params
 * @returns {string|undefined} SortBy option selected
 */
export default function createSortBySelectedOption(query: FieldValues): string | undefined {
  if (!isString(query.sortBy)) return undefined
  if (!isString(query.sortType)) return undefined

  return `${query.sortBy}/${query.sortType}`
}
