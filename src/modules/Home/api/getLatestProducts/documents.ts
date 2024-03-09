// Librarys
import { gql } from 'graphql-request'

// Utils
import createProductsFragment from '@modules/Products/api/utils/createProductsFragment'
import createProductImageFragment from '@modules/Product/api/utils/createProductImageFragment'

export const LatestProductsDocument = gql`
  query GetLatestProducts($limit: Int, $populate: Boolean) {
    latestProducts(limit: $limit, populate: $populate) {
      ...ProductsFields
      images {
        ...ProductImageFields
      }
      coverImage {
        ...ProductImageFields
      }
    }
  }

  ${createProductImageFragment()}
  ${createProductsFragment('Product')}
`
