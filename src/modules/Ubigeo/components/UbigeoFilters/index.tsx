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
        onChange={onChangeCountry}
        selectedValue={getValues(COUNTRY_FIELD)}
        noSelectionLabel={config[COUNTRY_FIELD]?.noSelectionLabel}
        containerClassName={config[COUNTRY_FIELD]?.containerClassName}
      />

      <FilterByRegion
        onChange={onChangeRegion}
        countryId={watch(COUNTRY_FIELD)}
        selectedValue={getValues(REGION_FIELD)}
        noSelectionLabel={config[REGION_FIELD]?.noSelectionLabel}
        containerClassName={config[REGION_FIELD]?.containerClassName}
      />

      <FilterByProvince
        onChange={onChangeProvince}
        regionId={watch(REGION_FIELD)}
        countryId={watch(COUNTRY_FIELD)}
        selectedValue={getValues(PROVINCE_FIELD)}
        noSelectionLabel={config[PROVINCE_FIELD]?.noSelectionLabel}
        containerClassName={config[PROVINCE_FIELD]?.containerClassName}
      />

      <FilterByDistrict
        onChange={onChangeDistrict}
        regionId={watch(REGION_FIELD)}
        countryId={watch(COUNTRY_FIELD)}
        provinceId={watch(PROVINCE_FIELD)}
        selectedValue={getValues(DISTRICT_FIELD)}
        noSelectionLabel={config[DISTRICT_FIELD]?.noSelectionLabel}
        containerClassName={config[DISTRICT_FIELD]?.containerClassName}
      />
    </section>
  )
}
