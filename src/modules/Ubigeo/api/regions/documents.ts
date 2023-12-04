// Librarys
import { gql } from 'graphql-request'

export const RegionsListDocument = gql`
  query GetRegionList($countryId: String) {
    regionList(countryId: $countryId) {
      id
      region
    }
  }
`
