// Interfaces
import { TimeStamps } from '@libs/axios/interfaces'

export interface Country extends TimeStamps {
  id: string
  country: string
  totalRegions: number
  totalProvinces: number
  totalDistricts: number
}

export interface CountryList {
  countryList: Country[]
}
