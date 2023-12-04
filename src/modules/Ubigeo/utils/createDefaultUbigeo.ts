// Types
import type { FieldValues } from 'react-hook-form'

/**
 * Create the default values for the Ubigeo fields
 * @param {FieldValues} query Receive a query
 */
export default function createDefaultUbigeo(query: FieldValues = {}) {
  return {
    region: query.region,
    country: query.country,
    province: query.province,
    district: query.district
  }
}
