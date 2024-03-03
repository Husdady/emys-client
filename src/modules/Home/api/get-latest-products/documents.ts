// Librarys
import { gql } from 'graphql-request'

// Utils
import createProductsFragment from '@modules/Products/api/utils/createProductsFragment'

export const LatestProductsDocument = gql`
  query GetLatestProducts($limit: Int, $populate: Boolean) {
    latestProducts(limit: $limit, populate: $populate) {
      ...ProductsFields
      images {
        url
        width
        height
        filename
      }
    }
  }

  ${createProductsFragment('Product')}
`
