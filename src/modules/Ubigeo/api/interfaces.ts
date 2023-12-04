// Interfaces
import { TimeStamps } from '@libs/axios/interfaces'
import { Region } from '@modules/Ubigeo/modules/Regions/api/interfaces'
import { Country } from '@modules/Ubigeo/modules/Countries/api/interfaces'
import { Province } from '@modules/Ubigeo/modules/Provinces/api/interfaces'
import { District } from '@modules/Ubigeo/modules/Districts/api/interfaces'

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
