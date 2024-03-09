// Librarys
import { gql } from 'graphql-request'

// Utils
import createProductFragment from './utils/createProductFragment'
import createProductImageFragment from './utils/createProductImageFragment'
import createProductsFragment from '@modules/Products/api/utils/createProductsFragment'

export const ProductDocument = gql`
  query GetProduct($code: String!) {
    product(code: $code) {
      ...ProductFields
      ...ProductsFields
      relatedProducts {
        ...ProductsFields
        images {
          ...ProductImageFields
        }
        coverImage {
          ...ProductImageFields
        }
      }
    }
  }

  ${createProductImageFragment()}
  ${createProductFragment('ProductByCode')}
  ${createProductsFragment('ProductByCode')}
`

export const ProductWithSessionDocument = gql`
  query GetProduct($code: String!) {
    productWithSession(code: $code) {
      ...ProductFields
      ...ProductsFields
      relatedProducts {
        ...ProductsFields
        images {
          ...ProductImageFields
        }
        coverImage {
          ...ProductImageFields
        }
      }
    }
  }

  ${createProductImageFragment()}
  ${createProductFragment('ProductByCode')}
  ${createProductsFragment('ProductByCode')}
`
