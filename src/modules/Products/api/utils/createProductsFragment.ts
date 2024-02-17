// Librarys
import { gql } from 'graphql-request'

/**
 * Create a Product Fragment
 * @param {string} model Model name
 */
const createProductsFragment = (model: string) => gql`
  fragment ProductsFields on ${model} {
    id
    sku
    name
    price
    isInStock
    description
    currencyType
    mainSeller {
      fullname
      photo {
        url
        width
        height
      }
    }
    coverImage {
      url
      width
      height
      filename
    }
  }
`
export default createProductsFragment
