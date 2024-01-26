// Interfaces
import { SelectProps } from '@components/Select/interfaces'
import { DistrictListArgs } from '@modules/Ubigeo/api/districts/interfaces'

export type DistrictsProps = Pick<DistrictListArgs, 'regionId' | 'countryId' | 'provinceId'> &
  Pick<SelectProps, 'error' | 'onChange' | 'textLabel' | 'selectedValue'>
