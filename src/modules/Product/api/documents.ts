// Librarys
import { gql } from 'graphql-request'

// Utils
import createProductFragment from '@modules/Products/api/utils/createProductFragment'
import createProductsFragment from '@modules/Products/api/utils/createProductsFragment'

export const ProductDocument = gql`
  query GetProduct($code: String!) {
    product(code: $code) {
      ...ProductFields
      ...ProductsFields
    }
  }

  ${createProductFragment('ProductByCode')}
  ${createProductsFragment('ProductByCode')}
`

export const ProductWithSessionDocument = gql`
  query GetProduct($code: String!) {
    productWithSession(code: $code) {
      ...ProductFields
      ...ProductsFields
    }
  }

  ${createProductFragment('ProductByCode')}
  ${createProductsFragment('ProductByCode')}
`
