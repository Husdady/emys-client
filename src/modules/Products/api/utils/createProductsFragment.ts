// Librarys
import { gql } from 'graphql-request'

/**
 * Create a Product Fragment
 * @param {string} model Model name
 */
const createProductsFragment = (model: string) => gql`
  fragment ProductsFields on ${model} {
    id
    name
    code
    price
    isInStock
    description
    currencyType
    mainSeller {
      phone
      fullname
      photo {
        url
        width
        height
      }
    }
  }
`
export default createProductsFragment
