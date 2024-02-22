// Librarys
import { gql } from 'graphql-request'

// Utils
import createProductsFragment from '@modules/Products/api/utils/createProductsFragment'

export const ProductDocument = gql`
  query GetProduct($code: String!) {
    product(code: $code) {
      maker
      weight
      weightType
      totalUnits
      benefits
      usageMode
      characteristics
      countryOrigin {
        country
      }
      images {
        id
        url
        width
        height
      }
      ...ProductsFields
    }
  }

  ${createProductsFragment('Product')}
`
