/* eslint-disable @typescript-eslint/no-misused-promises */
// Components
import FilterByRegion from '@modules/Ubigeo/components/FilterByRegion'
import FilterByCountry from '@modules/Ubigeo/components/FilterByCountry'
import FilterByProvince from '@modules/Ubigeo/components/FilterByProvince'
import FilterByDistrict from '@modules/Ubigeo/components/FilterByDistrict'

// Hooks
import useUbigeoFilters from './useUbigeoFilters'

// Interfaces
import { UbigeoFiltersProps } from './interfaces'

// Constants
import { COUNTRY_FIELD, REGION_FIELD, DISTRICT_FIELD, PROVINCE_FIELD } from './constants'

export default function UbigeoFilters({ watch, config, getValues, ...props }: UbigeoFiltersProps) {
  const { onChangeCountry, onChangeRegion, onChangeProvince, onChangeDistrict } =
    useUbigeoFilters(props)

  return (
    <section className="ubigeo-filters flex flex-col items-center flex-col sm:flex-row flex-wrap sm:justify-end gap-x-3.5 gap-y-3">
      <FilterByCountry
        {...(config[COUNTRY_FIELD] ?? {})}
        selectedValue={getValues(COUNTRY_FIELD)}
        onChange={onChangeCountry}
      />

      <FilterByRegion
        {...(config[REGION_FIELD] ?? {})}
        selectedValue={getValues(REGION_FIELD)}
        countryId={watch(COUNTRY_FIELD)}
        onChange={onChangeRegion}
      />

      <FilterByProvince
        {...(config[PROVINCE_FIELD] ?? {})}
        selectedValue={getValues(PROVINCE_FIELD)}
        countryId={watch(COUNTRY_FIELD)}
        regionId={watch(REGION_FIELD)}
        onChange={onChangeProvince}
      />

      <FilterByDistrict
        {...(config[DISTRICT_FIELD] ?? {})}
        selectedValue={getValues(DISTRICT_FIELD)}
        provinceId={watch(PROVINCE_FIELD)}
        countryId={watch(COUNTRY_FIELD)}
        regionId={watch(REGION_FIELD)}
        onChange={onChangeDistrict}
      />
    </section>
  )
}
