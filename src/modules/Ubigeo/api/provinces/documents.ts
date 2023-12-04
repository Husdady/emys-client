// Librarys
import { gql } from 'graphql-request'

export const ProvincesListDocument = gql`
  query GetProvincesList($regionId: String, $countryId: String) {
    provinceList(regionId: $regionId, countryId: $countryId) {
      id
      province
    }
  }
`
