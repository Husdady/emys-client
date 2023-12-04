// Librarys
import { gql } from 'graphql-request'

export const CountryListDocument = gql`
  query GetCountryList {
    countryList {
      id
      country
    }
  }
`
