// Hooks
import { useCallback } from 'react'
import { useLazyGetRegionsInListFormatQuery } from '@modules/Ubigeo/api/regions/graphql'
import { useLazyGetCountriesInListFormatQuery } from '@modules/Ubigeo/api/countries/graphql'
import { useLazyGetProvincesInListFormatQuery } from '@modules/Ubigeo/api/provinces/graphql'
import { useLazyGetDistrictsInListFormatQuery } from '@modules/Ubigeo/api/districts/graphql'

/**
 * Hook that allow to reload Ubigeo (Countries, Regions, etc...)
 */
export default function useReloadUbigeo() {
  const [reloadRegions] = useLazyGetRegionsInListFormatQuery({}) // Trigger Regions
  const [reloadCountries] = useLazyGetCountriesInListFormatQuery({}) // Trigger Countries
  const [reloadProvinces] = useLazyGetProvincesInListFormatQuery({}) // Trigger Provinces
  const [reloadDistricts] = useLazyGetDistrictsInListFormatQuery({}) // Trigger Districts

  // Callback that reload current testimonials
  const reloadUbigeo = useCallback(() => {
    void reloadRegions({}) // Reload Regions
    void reloadCountries(null) // Reload Countries
    void reloadProvinces({}) // Reload Provinces
    void reloadDistricts({}) // Reload Districts
  }, [])

  return {
    reloadUbigeo: reloadUbigeo
  }
}
