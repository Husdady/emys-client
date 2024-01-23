// Librarys
import { createId } from '@libs/nanoid'

// Hooks
import { useMemo } from 'react'

// Interfaces
import { Testimony } from '@modules/Testimonials/api/interfaces'

// Utils
import isObject from '@utils/isObject'
import isString from '@root/src/utils/isString'
import isEmptyString from '@root/src/utils/isEmptyString'

export interface UbigeoField {
  id?: string
  name?: string
}

/**
 * Hook for implements the logic of the UbigeoFields component
 * @param {Pick<Testimony, 'region' | 'country' | 'province' | 'district'>} params Receive a Ubigeo fields, Region, Country, Province and District
 */
export default function useUbigeoFields({
  region,
  country,
  province,
  district
}: Pick<Testimony, 'region' | 'country' | 'province' | 'district'>) {
  const ubigeoValues = useMemo(() => {
    let result = ''

    // Add and validates District
    if (isString(district?.district) && !isEmptyString(district?.district)) {
      result += `${district?.district ?? ''}, `
    }

    // Add and validates Province
    if (isString(province?.province) && !isEmptyString(province?.province)) {
      result += `${province?.province ?? ''}, `
    }

    // Add and validates Region
    if (isString(region?.region) && !isEmptyString(region?.region)) {
      result += `${region?.region ?? ''} - `
    }

    // Add and validates Country
    if (isString(country?.country) && !isEmptyString(country?.country)) {
      result += country?.country ?? ''
    }

    return isEmptyString(result) ? 'Ubicación desconocida' : result
  }, [region, country, province, district])

  return {
    ubigeoValues: ubigeoValues
  }
}
