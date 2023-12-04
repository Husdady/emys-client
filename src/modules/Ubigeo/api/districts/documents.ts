// Librarys
import { gql } from 'graphql-request'

export const DistrictListDocument = gql`
  query GetDistrictList($regionId: String, $countryId: String, $provinceId: String) {
    districtList(regionId: $regionId, countryId: $countryId, provinceId: $provinceId) {
      id
      district
    }
  }
`
