// Interfaces
import { TimeStamps } from '@libs/axios/interfaces'
import { Province } from '@modules/Ubigeo/api/provinces/interfaces'

export interface District extends TimeStamps {
  id: string
  district: string
  province: Province
}

export interface DistrictList {
  districtList: District[]
}

export interface DistrictListArgs {
  regionId?: string
  countryId?: string
  provinceId?: string
}
