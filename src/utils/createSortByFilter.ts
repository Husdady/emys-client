// Interfaces
import { Option } from '@components/Select/interfaces'

// Utils
import isString from './isString'
import isEmptyArray from './isEmptyArray'

// Constants
import { NULLABLE } from '@components/Select/constants'

export const SORT_BY_FIELD = 'sortBy'
export const SORT_TYPE_FIELD = 'sortType'

export type Field = 'sortBy' | 'sortType'

export interface CreateSortByParams {
  setValue: (field: Field, value: string | undefined) => void
}

/**
 * Sort the data of the tables
 * @param {Option} option Receive an option
 * @returns {(CreateSortByParams) => void} Callback
 */
export default function createSortByFilter(option: Option): (params: CreateSortByParams) => void {
  return ({ setValue }: CreateSortByParams) => {
    const values = option.value.split('/') // Split sort by values
    if (isEmptyArray(values)) return // Stop function if not exists values

    // The default option has been selected
    if (values.length === 1 && values[0] === NULLABLE) {
      setValue(SORT_BY_FIELD, undefined) // Update sortBy by to the default value
      setValue(SORT_TYPE_FIELD, undefined) // Update sortType by to the default value
    } else {
      const [sortBy, sortType] = values // Get sortBy and sortType values
      if (!isString(sortBy) || !isString(sortType)) return

      setValue(SORT_BY_FIELD, sortBy) // Update sortBy
      setValue(SORT_TYPE_FIELD, sortType) // Update sortType
    }
  }
}
