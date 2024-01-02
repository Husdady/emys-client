// Librarys
import { gql } from 'graphql-request'

export const LatestProductsDocument = gql`
  query GetLatestProducts($limit: Int, $populate: Boolean) {
    latestProducts(limit: $limit, populate: $populate) {
      id
      sku
      name
      price
      isInStock
      description
      currencyType
      coverImage {
        url
        width
        height
        filename
      }
    }
  }
`
