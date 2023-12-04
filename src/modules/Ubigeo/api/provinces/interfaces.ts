// Interfaces
import { TimeStamps } from '@libs/axios/interfaces'
import { Region } from '@modules/Ubigeo/api/regions/interfaces'

export interface Province extends TimeStamps {
  id: string
  region: Region
  province: string
  totalDistricts: number
}

export interface ProvinceList {
  provinceList: Province[]
}

export interface ProvinceListArgs {
  regionId?: string
  countryId?: string
}
