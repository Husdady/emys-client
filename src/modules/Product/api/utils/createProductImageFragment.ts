// Librarys
import { gql } from 'graphql-request'

/**
 * Create a Product Image Fragment
 */
const createProductImageFragment = () => gql`
  fragment ProductImageFields on Image {
    url
    width
    height
    filename
  }
`
export default createProductImageFragment
