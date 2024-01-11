// Librarys
import { gql } from 'graphql-request'

// Utils
import { createUbigeoFragment } from '@modules/Ubigeo/api/documents'

export const LatestSellersDocument = gql`
  query GetLatestSellers($limit: Int, $populate: Boolean) {
    latestSellers(limit: $limit, populate: $populate) {
      id
      dni
      ruc
      phone
      email
      status
      fullname
      ...UbigeoFields
      photo {
        url
        width
        height
      }
    }
  }

  ${createUbigeoFragment('Seller')}
`
