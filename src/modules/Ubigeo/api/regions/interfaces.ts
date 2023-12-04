// Interfaces
import { TimeStamps } from '@libs/axios/interfaces'
import { Country } from '@modules/Ubigeo/api/countries/interfaces'

export interface Region extends TimeStamps {
  id: string
  region: string
  country: Country
  totalProvinces: number
  totalDistricts: number
}

export interface RegionList {
  regionList: Region[]
}

export interface RegionListArgs {
  countryId?: string
}
