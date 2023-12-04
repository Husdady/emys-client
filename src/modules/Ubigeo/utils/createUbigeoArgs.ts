// Types
import type { FieldValues } from 'react-hook-form'

// Utils
import isEmptyString from '@utils/isEmptyString'

/**
 * Create the arguments for the Ubigeo
 * @param {FieldValues} state Receive a state
 */
export default function createUbigeoArgs(state: FieldValues = {}) {
  const { country, region, province, district } = state

  return {
    country: isEmptyString(country) ? undefined : country,
    region: isEmptyString(region) ? undefined : region,
    province: isEmptyString(province) ? undefined : province,
    district: isEmptyString(district) ? undefined : district
  }
}
