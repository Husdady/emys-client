// Interfaces
import { Region } from './regions/interfaces'
import { Country } from './countries/interfaces'
import { Province } from './provinces/interfaces'
import { District } from './districts/interfaces'
import { TimeStamps } from '@libs/axios/interfaces'

export interface Ubigeo extends TimeStamps {
  region: Region | null
  country: Country | null
  province: Province | null
  district: District | null
  regionId: string | null
  countryId: string | null
  provinceId: string | null
  districtId: string | null
}

export interface UbigeoArgs {
  region?: string
  country?: string
  province?: string
  district?: string
}
